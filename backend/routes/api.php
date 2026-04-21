<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\supportController;
use App\Http\Controllers\RegistrationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/storeSupport', [supportController::class, 'storeSupportQuestion']);
Route::post('/registerPassenger', [RegistrationController::class, 'registerPassenger']);
