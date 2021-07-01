<?php

namespace Larapress\Pages\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Larapress\CRUD\Extend\Helpers;

class ClearPagesCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lp:pages:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear cached pages data.';

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
        Helpers::forgetCachedValues(['pages']);

        return 0;
    }
}
