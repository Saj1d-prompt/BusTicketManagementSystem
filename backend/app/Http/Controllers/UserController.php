<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

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
        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'status'=> 400,
                'message'=>'Invalid email or password'
            ], 400);
        }
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Logged in successfully',
            'token' => $token,
            'token_type' => 'Bearer',
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
            'id' => $user->id,
            'is_profile_complete' => $user->is_profile_complete,
            'status' => 200
        ], 200);
    }
}
