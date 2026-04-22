<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request){
        $validate = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:5',
        ]);
        if($validate->fails()){
            return response()->json([
                'status'=> 400,
                'errors'=>$validate->errors()
            ], 400);
        }
    }
}
