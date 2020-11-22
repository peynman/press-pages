<?php

namespace Larapress\Pages\Services;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Larapress\CRUD\Repository\IRoleRepository;
use Larapress\ECommerce\IECommerceUser;

class PageVisitEvent implements ShouldQueue
{
    use Dispatchable, SerializesModels;

    /** @var int */
    public $userId;
    /** @var int */
    public $domainId;
    /** @var string */
    public $ip;
    /** @var array */
    public $filters;
    /** @var int */
    public $timestamp;
    /** @var int */
    public $page_id;
    /** @var int */
    public $supportId;
    /** @var string */
    public $role;

    /**
     * Create a new event instance.
     *
     * @param null|IECommerceUser $user
     * @param null|Domain $domain
     * @param $ip
     * @param $timestamp
     * @param $filters
     */
    public function __construct($user, $page_id, $domain, $ip, $timestamp, $filters = [])
    {
        $this->userId = is_null($user) ? $user : $user->id;
        $this->domainId = is_numeric($domain) || is_null($domain) ? $domain : $domain->id;
        if (!is_null($user)) {
            $this->supportId = $user->getSupportUserId();
            if (isset($user->roles)) {
                /** @var IRoleRepository */
                $roleRepo = app(IRoleRepository::class);
                $this->role = $roleRepo->getUserHighestRole($user)->name;
            }
        }
        $this->page_id = $page_id;
        $this->ip = $ip;
        $this->filters = $filters;
        $this->timestamp = $timestamp;
    }
}
