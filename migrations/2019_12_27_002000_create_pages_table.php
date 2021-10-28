<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('author_id', false, true);
            $table->string('name');
            $table->string('slug');
            $table->json('body')->nullable();
            $table->json('options')->nullable();
            $table->integer('zorder', false, true)->default(100);
            $table->integer('flags', false, true)->default(0);
            $table->timestamp('publish_at')->nullable();
            $table->timestamp('unpublish_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(
                [
                    'deleted_at',
                    'created_at',
                    'updated_at',
                    'publish_at',
                    'unpublish_at',
                    'name',
                    'slug',
                    'zorder',
                    'flags'
                ],
                'pages_full_index'
            );
            $table->unique(['deleted_at', 'name']);

            $table->foreign('author_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
