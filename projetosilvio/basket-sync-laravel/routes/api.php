<?php

use App\Http\Controllers\PartidaController;

Route::middleware('auth.firebase')->group(function () {
    Route::resource('partidas', PartidaController::class);
});