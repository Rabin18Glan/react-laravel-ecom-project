<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use  App\Models\UserCart;
use  App\Models\Product;
use App\Http\Controllers\Controller;

class UserCartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getCarts($userId)
    {
        $userCartProducts = UserCart::with('product')->where('user_id', $userId)->get();


        return response()->json(
            ['status'=>1,
                'user_id' => $userId, 
            'products' => $userCartProducts]);
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
    public function storeCart(Request $request)
    {try{
        $userId =$request->input('user_id');
        $productId = $request->input('product_id');
        $count = $request->input('count', 1); // Default count is 1 if not provided

        
        $userCart = UserCart::where('user_id', $userId)
            ->where('product_id', $productId)
            ->first();

        if ($userCart) {
            // Product already exists in the cart, update the count
            $userCart->count += $count;
            $userCart->save();
        } else {
            // Product does not exist in the cart, create a new entry
            $userCart = new UserCart();
            $userCart->user_id = $userId;
            $userCart->product_id = $productId;
            $userCart->count = $count;
            $userCart->save();
        }

        return response()->json([
            'status'=>1,
            'message' => 'Product added to cart',
        'data'=>$userCart],200);

            
    }
    catch (\Exception $e){
        return response()->json([
            'status'=>0,
            'message' => 'Internal Server Error',
        ]);
    }

    }

    /**
     * Display the specified resource.
     */
    public function delete($id)
    {
        $product = UserCart::find($id);
        if($product)
        {
try {
    $product->delete();
    return response()->json([
'status'=>1,
'message'=>'deleted successfully',
    ],200);
}
    catch (\Exception $e){
        return response()->json([
            'status'=>0,
            'message'=>'Internal Server Error '.$e,
                ],500);
    
}

        }
        else{
            return response()->json([
                'status'=>0,
                'message'=>'There is no such product',
                    ],400);
    
        }
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
