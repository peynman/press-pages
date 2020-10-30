<?php

namespace Larapress\Pages\Commands;

use Illuminate\Support\Facades\Artisan;
use Larapress\CRUD\Commands\ActionCommandBase;
use Larapress\Pages\Models\Page;

class PageCommands extends ActionCommandBase
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'larapress:pages {--action=} {--file=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create super users and assign roles';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct([
            'import:file' => $this->importFromJSONFile(),
            'import:convert' => $this->convertJSONFile(),
            'export:pages' => $this->exportToJSON(),
        ]);
    }

    public function importFromJSONFile() {
        return function () {
            $import = function($filename) {
                $content = file_get_contents($filename);
                $pageData = json_decode($content, true);
                $page = Page::updateOrCreate([
                    'name' => $pageData['name'],
                    'author_id' => isset($pageData['author_id']) ? $pageData['author_id']:1,
                    'slug' => $pageData['slug'],
                ], [
                    'zorder' => isset($pageData['zorder']) ? $pageData['zorder']:100,
                    'body' => $pageData['body'],
                    'options' => $pageData['options'],
                    'flags' => isset($pageData['flags']) ? $pageData['flags']:0,
                ]);
                $this->info("Page created with slug: ".$page->slug);
            };
            $filename = $this->option('file');
            if (is_dir($filename)) {
                $files = array_diff(scandir($filename), ['.', '..']);
                foreach ($files as $file) {
                    $import($filename.DIRECTORY_SEPARATOR.$file);
                }
            } else {
                $import($filename);
            }
            Artisan::call('cache:clear');
        };
    }

    public function convertJSONFile() {
        return function () {
            $pretty = function($file) {
                $content = file_get_contents($file);
                $pageData = json_decode($content, true);
                file_put_contents($file, json_encode($pageData, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
            };
            $filename = $this->option('file');
            if (is_dir($filename)) {
                $files = array_diff(scandir($filename), ['.', '..']);
                foreach ($files as $file) {
                    $pretty($filename.DIRECTORY_SEPARATOR.$file);
                    $this->info("converted $file");
                }
            } else {
                $pretty($filename);
                $this->info("converted $filename");
            }
        };
    }

    public function exportToJSON() {
        return function () {
            $dir = storage_path('json/templates');

            $pages = Page::all();
            foreach ($pages as $page) {
                file_put_contents($dir.'/'.$page->name.'.json', json_encode($page->toArray(), JSON_PRETTY_PRINT));
            }

        };
    }
}
