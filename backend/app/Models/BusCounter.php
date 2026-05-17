<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusCounter extends Model
{
    protected $fillable = [
        'name',
        'city',
        'address',
        'contact_number',
        'status',
        'company_id'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
