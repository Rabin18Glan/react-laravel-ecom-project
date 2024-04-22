<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use  App\Models\UserReview;
use  App\Models\Product;

class UserReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getReviews($productId)
    {
        try {

            $reviews = UserReview::with('user')
                ->where('product_id', $productId)
                ->get();

            return response()->json([
                'status' => 1,
                'message' => 'Reviews gets successfully',
                'reviews' => $reviews


            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 0,
                'message' => 'Internal Server Error' . $e,


            ], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function storeReview(Request $request)
    {
        try {
            $product = Product::find($request->productId);
            $countOfReviews = UserReview::where('product_id', $request->productId)->count();

            if ($product) {
                // Update the rating

                $product->ratings = ($countOfReviews * $product->ratings + $request->rating) / ($countOfReviews + 1);
                $product->number_of_ratings = $countOfReviews + 1;
                $product->save();

                $userReview = new UserReview();
                $userReview->user_id = $request->userId; // Replace $userId with the actual user ID
                $userReview->product_id = $request->productId; // Replace $productId with the actual product ID
                $userReview->user_review = $request->userReviewText; // Replace $userReviewText with the actual review text
                $userReview->rating = $request->rating; // Replace $rating with the actual rating

                $userReview->save();

                return response()->json([
                    'status' => 1,
                    'message' => 'Reviewed successfully',
                    'review' => $userReview,
                    'count' => $countOfReviews + 1

                ]);
            } else {
                return response()->json([
                    'status' => 0,
                    'message' => 'No Product Found' ,
    
    
                ], 400);
               
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 0,
                'message' => 'Internal Server Error' . $e,


            ], 500);
        }
    }
}
