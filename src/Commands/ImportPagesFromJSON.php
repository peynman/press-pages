<?php

namespace Larapress\Pages\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Larapress\Pages\Models\Page;
use Illuminate\Support\Str;

class ImportPagesFromJSON extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lp:pages:import {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import page from json file (directory with files ending with .json).';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $import = function ($filename) {
            $content = file_get_contents($filename);
            $pageData = json_decode($content, true);
            $page = Page::updateOrCreate([
                'name' => $pageData['name'],
                'author_id' => isset($pageData['author_id']) ? $pageData['author_id'] : 1,
                'slug' => $pageData['slug'],
            ], [
                'zorder' => isset($pageData['zorder']) ? $pageData['zorder'] : 100,
                'body' => $pageData['body'],
                'options' => $pageData['options'],
                'flags' => isset($pageData['flags']) ? $pageData['flags'] : 0,
            ]);
            $this->info("Page created with slug: " . $page->slug);
        };
        $filename = $this->option('path');
        if (is_dir($filename)) {
            $files = array_diff(scandir($filename), ['.', '..']);
            foreach ($files as $file) {
                if (Str::endsWith($file, '.json')) {
                    $import($filename . DIRECTORY_SEPARATOR . $file);
                }
            }
        } else {
            $import($filename);
        }
        Artisan::call('cache:clear');
        return 0;
    }
}
