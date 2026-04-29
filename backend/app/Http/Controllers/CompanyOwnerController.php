<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyOwnerController extends Controller
{
    public function getCompanyStatus(Request $request)
    {
        $company = Company::where('user_id', $request->user()->id)->first();

        if (!$company) {
            return response()->json(['status' => 404, 'message' => 'Company not found'], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $company
        ], 200);
    }
}
