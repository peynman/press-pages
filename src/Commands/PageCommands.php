<?php

namespace Larapress\Pages\Commands;

use Illuminate\Support\Facades\Artisan;
use Larapress\CRUD\Commands\ActionCommandBase;
use Larapress\Pages\Models\Page;
use Larapress\Profiles\Flags\UserDomainFlags;
use Larapress\Profiles\Models\Domain;
use Larapress\Profiles\IProfileUser;

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
            'export:pages' => $this->exportToJSON(),
            'add:domain' => $this->addDomain(),
        ]);
    }

    public function addDomain() {
        return function () {
            $domainName = $this->ask('Enter domain to add');
            $domain = Domain::updateOrCreate([
                'domain' => $domainName,
                'author_id' => 1,
            ]);

            /** @var Builder $user_quer */
            $user_query = call_user_func([config('larapress.crud.user.class'), 'query']);
            /** @var \Larapress\CRUD\ICRUDUser|IProfileUser $user */
            $users = $user_query->whereHas('roles', function($q) {
                $q->where('id', 1);
            })->get();
            foreach ($users as $user) {
                $user->domains()->attach($domain, [
                    'flags' => UserDomainFlags::REGISTRATION_DOMAIN | UserDomainFlags::MEMBERSHIP_DOMAIN,
                ]);
                $user->forgetDomainsCache();
            }
            $this->info('done.');
        };
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

    public function exportToJSON() {
        return function () {
            $dir = storage_path('json/templates');

            $pages = Page::query();
            if (!is_null($this->option('file'))) {
                $pages->where('name', $this->option('file'));
            }
            $pages = $pages->get();
            foreach ($pages as $page) {
                $this->info("Page exported ".$page->name);
                file_put_contents($dir.'/'.$page->name.'.json', json_encode($page->toArray(), JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
            }

        };
    }
}
