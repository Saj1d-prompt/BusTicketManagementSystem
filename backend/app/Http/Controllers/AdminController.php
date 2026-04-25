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
}
