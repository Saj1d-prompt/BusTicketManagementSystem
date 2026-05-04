<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class AdminController extends Controller
{
    public function getCompanyAccApplications()
    {
        $applications = Company::where('status', 'pending')
        ->leftJoin('users', 'companies.id', '=', 'users.company_id')
        ->select('companies.id', 'companies.company_name',
         'companies.license_number', 'companies.document_path',
        'users.name', 'users.email',
        'users.phone')
        ->get();

        return response()->json([
            'status' => 200,
            'data' => $applications
        ], 200);
    }

    public function updateCompanyAccStatus(Request $request, $id)
    {
        $company = Company::find($id);
        if (!$company) {
            return response()->json([
                'status' => 404,
                'message' => 'Company not found'
            ], 404);
        }
        $company->status = $request->status;
        $company->save();
        return response()->json([
            'status' => 200,
            'message' => 'Company account status updated successfully'
        ], 200);
    }

    public function getAllCompanies()
    {
        
    }
}
