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
Route::get('/partidas/{id}', [PartidaController::class, 'edit']);
Route::put('/partidas/{id}', [PartidaController::class, 'update']);
Route::delete('/partidas/{id}', [PartidaController::class, 'destroy']);