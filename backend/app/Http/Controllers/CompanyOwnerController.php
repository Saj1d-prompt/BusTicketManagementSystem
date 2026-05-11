<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Bus;
use Illuminate\Support\Facades\Validator;

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

    public function deleteOperator(Request $request, $id)
    {
        $companyID = $request->user()->company_id;

        if (!$companyID) {
            return response()->json([
                'status' => 404,
                'message' => 'Company not found'
            ], 404);
        }

        $operator = User::where('id', $id)
            ->where('company_id', $companyID)
            ->where('role', 'operator')
            ->first();

        if (!$operator) {
            return response()->json([
                'status' => 404,
                'message' => 'Operator not found'
            ], 404);
        }

        $operator->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Operator deleted successfully'
        ], 200);
    }

    public function addBus(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'bus_name' => 'required|string',
            'brand' => 'string',
            'registration_number' => 'required|string|unique:buses',
            'type' => 'required|string',
            'total_seats' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }

        $bus = new Bus();
        $bus->bus_name = $request->bus_name;
        $bus->brand = $request->brand;
        $bus->registration_number = $request->registration_number;
        $bus->type = $request->type;
        $bus->total_seats = $request->total_seats;
        $bus->company_id = $request->user()->company_id;
        $bus->save();

        return response()->json([
            'status' => 200,
            'message' => 'Bus added successfully',
            'data' => $bus
        ], 200);
    }

    public function getBusList(Request $request)
    {
        $companyID = $request->user()->company_id;

        if (!$companyID) {
            return response()->json([
                'status' => 404,
                'message' => 'Company not found'
            ], 404);
        }

        $buses = Bus::where('company_id', $companyID)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $buses
        ], 200);
    }

    public function updateBusStatus(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string|in:active,maintainance,retired',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }

        $companyID = $request->user()->company_id;

        if (!$companyID) {
            return response()->json([
                'status' => 404,
                'message' => 'Company not found'
            ], 404);
        }

        $bus = Bus::where('id', $id)
            ->where('company_id', $companyID)
            ->first();

        if (!$bus) {
            return response()->json([
                'status' => 404,
                'message' => 'Bus not found'
            ], 404);
        }

        $bus->status = $request->status;
        $bus->save();

        return response()->json([
            'status' => 200,
            'message' => 'Bus status updated successfully',
            'data' => $bus
        ], 200);
    }

    public function addRoute(Request $request)
    {
        //code
    }
}
