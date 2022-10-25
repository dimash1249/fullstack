<?php

use App\Http\Controllers\Auth\ApiAuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class, 'login'])->name('login.api');
    Route::post('/register',[ApiAuthController::class, 'register'])->name('register.api');
});
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [ApiAuthController::class, 'logout'])->name('logout.api');
    Route::get('/products', [ProductController::class, 'index'])->name('show.api');
    Route::get('/products/{id}', [ProductController::class, 'show'])->name('showById.api');
    Route::post('/products/product-create', [ProductController::class, 'store'])->name('create.api');
    Route::post('/products/edit/{id}', [ProductController::class, 'edit'])->name('edit.api');
    Route::post('/products/delete/{id}', [ProductController::class, 'delete'])->name('delete.api');
});


