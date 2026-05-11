<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusRoute extends Model
{
    protected $fillable = [
        'origin_city',
        'destination_city',
        'distance_km',
        'estimated_time_hours',
        'status',
        'company_id'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
