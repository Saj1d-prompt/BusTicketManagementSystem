<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class RegistrationController extends Controller
{
    public function registerPassenger(Request $request){
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:12',
            'password' => 'required|string|min:5|confirmed',
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validate->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => $request->password,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Your Account has been created successfully',
            'user' => $user
        ], 201);

    }
}
