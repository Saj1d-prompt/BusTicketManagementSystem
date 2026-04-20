<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Support;

class supportController extends Controller
{
    public function storeSupportQuestion(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'=> 400,
                'errors'=>$validator->errors()
            ], 400);
        }
        $support = new Support();
        $support->name = $request->name;
        $support->email = $request->email;
        $support->message = $request->message;
        $support->save();

        return response()->json([
            'message' => 'Your question has been submitted successfully. We will get back to you soon via email.',
            'status' => 200
        ], 200);
    }
}
