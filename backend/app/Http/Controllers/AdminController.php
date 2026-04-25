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
        ->get();

        return response()->json([
            'status' => 200,
            'data' => $applications
        ], 200);
    }
}
