<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'company_name',
        'license_number',
        'document_path',
        'status',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
