<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\supportController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CompanyOwnerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/storeSupport', [supportController::class, 'storeSupportQuestion']);
Route::post('/registerPassenger', [RegistrationController::class, 'registerPassenger']);
Route::post('/registerCompany', [RegistrationController::class, 'registerCompany']);
Route::post('/login', [UserController::class, 'login']);

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::get('/companyApplications', [AdminController::class, 'getCompanyAccApplications']);
    Route::post('/updateCompanyAccStatus/{id}', [AdminController::class, 'updateCompanyAccStatus']);
    Route::get('/allCompanies', [AdminController::class, 'getAllCompanies']);
});

Route::middleware(['auth:sanctum', 'role:company'])->group(function () {
    Route::get('/companyStatus', [CompanyOwnerController::class, 'getCompanyStatus']);
    Route::post('/registerOperator', [RegistrationController::class, 'registerOperator']);
    Route::get('/operatorList', [CompanyOwnerController::class, 'getOperatorList']);
    Route::delete('/deleteOperator/{id}', [CompanyOwnerController::class, 'deleteOperator']);
    Route::post('/addBus', [CompanyOwnerController::class, 'addBus']);
    Route::get('/busList', [CompanyOwnerController::class, 'getBusList']);
    Route::put('/updateBusStatus/{id}', [CompanyOwnerController::class, 'updateBusStatus']);
    Route::post('/addBusRoute', [CompanyOwnerController::class, 'addRoute']);
    Route::get('/routeList', [CompanyOwnerController::class, 'getRouteList']);
    Route::put('/updateRouteStatus/{id}', [CompanyOwnerController::class, 'updateRouteStatus']);
    Route::post('/addCounter', [CompanyOwnerController::class, 'addCounter']);
    Route::get('/counterList', [CompanyOwnerController::class, 'getCounter']);
    Route::put('/updateCounterStatus/{id}', [CompanyOwnerController::class, 'updateCounterStatus']);
});
