<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    protected $fillable = [
        'bus_name',
        'brand',
        'registration_number',
        'type',
        'total_seats',
        'status',
    ];
}
