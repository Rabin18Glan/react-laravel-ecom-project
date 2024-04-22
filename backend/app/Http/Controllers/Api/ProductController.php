<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getProducts()
    {
        try{
            $productlist = Product::all();
       return response()->json(
            [
                'status' => 1,
                'message' => 'successfull',
                'products' => $productlist
             

            ]
            );

        }
        catch(\Exception $e){
            return response()->json(
                [
'status' => 0,
'message' =>'internal server error',

                ],500
                );
        }
        //

  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getProductsDetail($id)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function createNewProduct(Request $request)
    {
        $validate = Validator::make($request->all(),[

            'name' =>['required'],
            'price' =>['required'],
            'description' =>['required'],
            'category' =>['required'],
            'image' =>['required'],
        

        ]);
            if($validate->fails())
           {
               return response()->json($validate->messages(),400);
          }
       else{
        $path = $request->file('image')->store('public/images');
        $url="http://127.0.0.1:8000".Storage::url($path);
        DB::beginTransaction();
        $data = [
            'name' =>$request->name,
            'price' =>$request->price,
            'description'=> $request->description,
            'category'=>$request->category,
            'image'=>$url

        ];
        try{ 
          // p($data);
          $product =  Product::create($data);
            DB::commit();

        }
        catch(\Exception $e){
            // p($data);
            return response()->json($e);
            DB::rollback();
            $product = null;
        }
        if($product!= null){
          
            return response()->json([
              
                'product' => $product,
                'message' =>"product created successfully",
           'status' => 1,
            ],200);
        }
        else{
            return response()->json(
                [
                    'message'=>'Internal server error'
                ],500
            );
        }

     }
       
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
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
