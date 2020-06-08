<?php

namespace Larapress\Pages\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Larapress\CRUD\ICRUDUser;
use Larapress\Profiles\IProfileUser;

class PageEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;
    /** @var \Larapress\Profiles\Models\Domain */
    public $domain;
    /** @var string */
    public $ip;

    /**
     * Create a new event instance.
     *
     * @param $user
     * @param $domain
     * @param $ip
     */
    public function __construct($user, $domain, $ip)
    {
        $this->user = $user;
        $this->domain = $domain;
        $this->ip = $ip;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel(config('larapress.crud.events.channel'));
    }
}
