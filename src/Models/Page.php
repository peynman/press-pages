<?php

namespace Larapress\Pages\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $deleted_at
 * @property int $id
 * @property string name
 * @property int author_id
 * @property string slug
 * @property array options
 * @property array body
 * @property int flags
 * @property \Larapress\CRUD\ICRUDUser $author
 */
class Page extends Model
{
    use SoftDeletes;

    public $fillable = [
        'name',
        'author_id',
        'slug',
        'options',
        'body',
        'flags'
    ];

    public $casts = [
        'options' => 'array',
        'body' => 'array',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author() {
        return $this->belongsTo(config('larapress.crud.user.class'), 'author_id');
    }
}