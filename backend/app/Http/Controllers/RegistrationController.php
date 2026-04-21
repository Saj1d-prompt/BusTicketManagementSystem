<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegistrationController extends Controller
{
    public function registerPassenger(Request $request){
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:11',
            'password' => 'required|string|min:5',
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validate->errors()
            ], 422);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->role = 'passenger';
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Your Account has been created successfully',
            'user' => $user
        ], 200);
    }

    public function registerCompany(Request $request){
        $validate = Validator::make($request->all(), [
            'company_name' => 'required|string|max:255',
            'license_number' => 'required|string|max:255|unique:users',
            'document_path' => 'required|mimes:pdf,jpg,jpeg,png|max:5120',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:11',
            'password' => 'required|string|min:5',
        ]);

        if($validate->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validate->errors()
            ], 422);
        }
        
    }
}
