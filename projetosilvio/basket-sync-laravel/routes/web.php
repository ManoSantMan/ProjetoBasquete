<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PartidaController;

Route::get('/', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/home', [PartidaController::class, 'index']);
Route::get('/partidas', [PartidaController::class, 'create']);
Route::post('/partidas', [PartidaController::class, 'store']);




