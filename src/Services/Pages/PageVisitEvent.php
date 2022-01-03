<?php

namespace Larapress\Pages\Services\Pages;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Larapress\ECommerce\IECommerceUser;
use Larapress\Profiles\IProfileUser;
use Illuminate\Http\Request;
use Larapress\CRUD\Extend\MobileDetect;

class PageVisitEvent implements ShouldQueue
{
    use Dispatchable, SerializesModels;

    /** @var int */
    public $userId;
    /** @var int */
    public $domainId;
    /** @var string */
    public $ip;
    /** @var string */
    public $agent;
    /** @var string */
    public $client;
    /** @var string */
    public $path;
    /** @var string */
    public $isMobile;
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
     * @param Request $request
     * @param $timestamp
     * @param $filters
     */
    public function __construct($user, $page_id, $domain, $request, $timestamp, $filters = [])
    {
        $this->userId = is_null($user) ? $user : $user->id;
        $this->domainId = is_numeric($domain) || is_null($domain) ? $domain : $domain->id;
        if (!is_null($user)) {
            if (isset($user->roles)) {
                $this->role = $user->getUserHighestRole()->name;
            }
        }
        $this->page_id = $page_id;
        $this->ip = $request->getClientIp();
        $this->agent = $request->userAgent();
        $this->isMobile = (new MobileDetect())->isMobile($request->userAgent(), $request->headers->all());
        $this->client =  $request->header(config('larapress.profiles.security.device_client_header'), 'web');
        $this->path = $request->getBaseUrl();

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

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getUserIp() {
        return $this->ip;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getUserAgent() {
        return $this->agent;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function isMobileVisit() {
        return $this->isMobile;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getDeviceClient() {
        return $this->client;
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getRequestPath() {
        return $this->path;
    }
}
