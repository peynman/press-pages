<?php

namespace Larapress\Pages\Services;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Larapress\CRUD\ICRUDUser;
use Larapress\Profiles\IProfileUser;

class PageVisitEvent implements ShouldQueue
{
    use Dispatchable, SerializesModels;

    /** @var IProfileUser|ICRUDUser */
    public $user;
    /** @var \Larapress\Profiles\Models\Domain */
    public $domain;
    /** @var string */
    public $ip;
    /** @var array */
    public $filters;
    /** @var int */
    public $timestamp;
    /** @var int */
    public $page_id;

    /**
     * Create a new event instance.
     *
     * @param $user
     * @param $domain
     * @param $ip
     * @param $timestamp
     * @param $filters
     */
    public function __construct($user, $page_id, $domain, $ip, $timestamp, $filters = [])
    {
        $this->user = $user;
        $this->page_id = $page_id;
        $this->domain = $domain;
        $this->ip = $ip;
        $this->filters = $filters;
        $this->timestamp = $timestamp;
    }
}
