<?php

namespace Larapress\Pages\Repository;

interface IPageRepository {
    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageRepositories($user);

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageObjectFetchers($user);

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageTitles($user);
}
