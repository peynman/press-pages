<?php

namespace Larapress\Pages\Services;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Larapress\ECommerce\IECommerceUser;
use Larapress\Profiles\IProfileUser;

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
            if (isset($user->roles)) {
                $this->role = $user->getUserHighestRole()->name;
            }
        }
        $this->page_id = $page_id;
        $this->ip = $ip;
        $this->filters = $filters;
        $this->timestamp = $timestamp;
    }

    /**
     * Undocumented function
     *
     * @return IProfileUser|null
     */
    public function getUser(): IProfileUser|null
    {
        if (!is_null($this->userId)) {
            $class = config('larapress.crud.user.model');
            return call_user_func([$class, 'find'], $this->userId);
        }

        return null;
    }
}
