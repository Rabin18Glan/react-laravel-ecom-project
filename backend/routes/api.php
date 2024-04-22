<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Controllers\Api\UserCartController;
use App\Http\Controllers\Api\UserReviewController;

//User
Route::get(
    '/users',
    [UserController::class, 'getUsers']
)->middleware('auth:api');
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


//Products
Route::post('/products/create-new-product', [ProductController::class, 'createNewProduct'])->middleware('auth:api');
Route::get('/products', [ProductController::class, 'getProducts']);
Route::get('/product/{id}', [ProductController::class, 'getProductDetail']);

//UserCart
Route::post('/cart/store-cart', [UserCartController::class, 'storeCart'])->middleware('auth:api');
Route::get('/cart/get-carts/{userId}', [UserCartController::class, 'getCarts'])->middleware('auth:api');
Route::delete('/cart/delete-cart/{cartId}', [UserCartController::class, 'delete'])->middleware('auth:api');

//UserOrderHistory
Route::post('/cart/store-order', [UserCartController::class, 'storeOrder'])->middleware('auth:api');

Route::get('/cart/get-order-history/{userId}', [UserCartController::class, 'getOrderHistory'])->middleware('auth:api');

//Reviews
Route::post('/reviews/store', [UserReviewController::class, 'storeReview'])->middleware('auth:api');
Route::get('/reviews/get-reviews/{productId}', [UserReviewController::class, 'getReviews'])->middleware('auth:api');
