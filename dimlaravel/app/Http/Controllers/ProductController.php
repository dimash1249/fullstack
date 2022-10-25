<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return response(['products' => $products]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'detail' => 'required|string',
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
        $product = Product::create($request->toArray());
        $response = ['message' => 'Product created successfully.'];
        return response($response, 200);
    }

    /**
     * @param $id
     */
    public function show($id) {
        $product = Product::find($id);
        return response(['product' => $product], 200);
    }

    public function edit($id, Request $product) {
        //$validator = Validator::make((array)$product->all(), [
        //    'name' => 'required|string',
        //    'detail' => 'required|string'
        //]);

        //if ($validator->fails())
        //{
        //    return response(['errors'=>$validator->errors()->all()], 422);
        //}
        $updatedProduct = Product::find($id);
        $updatedProduct->update($product->all());
        return response(['message' => 'Product updated successfully.']);
    }

    public function delete($id) {
        Product::find($id)->delete();
        //Product::delete($id);
        return response(['message' => 'Product deleted successfully.']);
    }
}
