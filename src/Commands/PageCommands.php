<?php

namespace Larapress\Pages\Commands;

use Larapress\Core\Commands\ActionCommandBase;
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
        ]);
    }

    public function importFromJSONFile() {
        return function () {
            $filename = $this->option('file');
            $content = file_get_contents($filename);
            $pageData = json_decode($content, true);

            /** @var Page $page */
            $page = Page::updateOrCreate([
                'name' => $pageData['name'],
                'author_id' => isset($pageData['author_id']) ? $pageData['author_id']:1,
                'slug' => $pageData['slug'],
            ], [
                'body' => $pageData['body'],
                'options' => $pageData['options'],
                'flags' => isset($pageData['flags']) ? $pageData['flags']:0,
            ]);

            $this->info("Page created with slug: ".$page->slug);
        };
    }
}