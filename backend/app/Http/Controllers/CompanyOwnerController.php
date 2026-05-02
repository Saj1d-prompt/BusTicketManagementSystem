<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\User;

class CompanyOwnerController extends Controller
{
    public function getCompanyStatus(Request $request)
    {
        $company = Company::where('id', $request->user()->company_id)->first();

        if (!$company) {
            return response()->json(['status' => 404, 'message' => 'Company not found'], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $company
        ], 200);
    }

    public function getOperatorList(Request $request)
    {
        $companyID = $request->user()->company_id;

        if (!$companyID) {
            return response()->json([
                'status' => 404,
                'message' => 'Company not found'
            ], 404);
        }

        $operators = User::where('company_id', $companyID)
            ->where('role', 'operator')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $operators
        ], 200);
    }
}
