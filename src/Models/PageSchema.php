<?php

namespace Larapress\Pages\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $deleted_at
 * @property int $id
 * @property string $name
 * @property string $schema
 * @property int $flags
 * @property int author_id
 * @property \Larapress\CRUD\ICRUDUser $author
 */
class PageSchema extends Model
{
    use SoftDeletes;

    public $table = 'page_schemas';

    public $fillable = [
        'name',
        'schema',
        'flags',
        'author_id',
        'publish_at',
	    'expires_at',
    ];

    public $casts = [
        'schema' => 'array',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author() {
        return $this->belongsTo(config('larapress.crud.user.class'), 'author_id');
    }
}
