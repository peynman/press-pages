<?php

namespace Larapress\Pages\Commands;

use Illuminate\Console\Command;
use Larapress\Pages\Models\Page;

class ExportPagesToJSON extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lp:pages:export {--name=} {--id=} {--dir=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export all/specific page to json file.';

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
        $dir = $this->option('dir', storage_path('json/templates'));

        $pages = Page::query();
        if (!is_null($this->option('name'))) {
            $pages->where('name', $this->option('name'));
        } else if (!is_null($this->option('id'))) {
            $pages->where('id', $this->option('id'));
        }

        $pages = $pages->get();
        foreach ($pages as $page) {
            $this->info("Page exported " . $page->name);
            file_put_contents($dir . '/' . $page->name . '.json', json_encode($page->toArray(), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        }
        return 0;
    }
}
