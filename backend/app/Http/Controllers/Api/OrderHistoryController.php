<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use  App\Models\OrderHistory;
use  App\Models\Product;
use App\Http\Controllers\Controller;
use Exception;

class userOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getOrdersHistory($userId)
    {
        try {
            $products = OrderHistory::with('product')->where('user_id', $userId)->get();
            return response()->json(
                [
                    'status' => 1,
                    'message' => 'Success',
                    'user_id' => $userId,
                    'products' => $products
                ],
                200
            );
        } catch (Exception $e) {
            return response()->json(
                [
                    'status' => 0,
                    'message' => 'Internal Server Error',
                ],
                500
            );
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeOrderHistory(Request $request)
    {
        $userId = $request->input('user_id');
        $productId = $request->input('product_id');
        $count = $request->input('count', 1); // Default count is 1 if not provided

        try {
            $userOrder = OrderHistory::where('user_id', $userId)
                ->where('product_id', $productId)
                ->first();

            if ($userOrder) {
                // Product already exists in the cart, update the count
                $userOrder->count += $count;
                $userOrder->save();
            } else {
                // Product does not exist in the cart, create a new entry
                $userOrder = new OrderHistory();
                $userOrder->user_id = $userId;
                $userOrder->product_id = $productId;
                $userOrder->count = $count;
                $userOrder->save();
            }

            return response()->json([
                'status' => 1,
                'message' => 'Product added to Order History',
                'data' => $userOrder
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 0,
                'message' => 'Internal Server Error',
            ]);
        }
    }
}
