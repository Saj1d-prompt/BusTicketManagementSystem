<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Company;
use Exception;

class RegistrationController extends Controller
{
    public function registerPassenger(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:11',
            'password' => 'required|string|min:5',
        ]);

        if ($validate->fails()) {
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

    public function registerCompany(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'company_name' => 'required|string|max:255',
            'license_number' => 'required|string|max:255|unique:users',
            'document_path' => 'required|mimes:pdf,jpg,jpeg,png|max:5120',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:11',
            'password' => 'required|string|min:5',
        ]);

        try {
            if ($request->hasFile('document_path')) {
                $file = $request->file('document_path');
                $oriName = $file->getClientOriginalName();

                $path = $file->store('license_documents', 'public');

                $company = new Company();
                $company->company_name = $request->company_name;
                $company->license_number = $request->license_number;
                $company->document_path = $path;
                $company->status = 'pending';
                $company->save();

                $user = new User();
                $user->name = $request->name;
                $user->email = $request->email;
                $user->phone = $request->phone;
                $user->role = 'company';
                $user->company_id = $company->id;
                $user->password = Hash::make($request->password);
                $user->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Your Company registration has been submitted successfully. It is currently under review.',
                    'company' => $company,
                    'user' => $user
                ], 200);
            }
        } catch (Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while uploading the report. Please try again later.'
            ], 500);
        }
    }

    public function registerOperator(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:11',
            'password' => 'required|string|min:5',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validate->errors()
            ], 422);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->role = 'operator';
        $user->company_id = $request->user()->company_id;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Operators Account has been created successfully',
            'user' => $user
        ], 200);
    }
}
