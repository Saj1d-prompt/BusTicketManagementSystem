<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class AdminController extends Controller
{
    public function getCompanyAccApplications()
    {
        $companyApp = Company::Where('status', 'pending')
        ->join('users', 'companies.user_id', '=', 'users.id')
        ->get();
        return response()->json(
            [
                'status' => 200,
                'data' => $companyApp
            ],
            200
        );
    }
}
