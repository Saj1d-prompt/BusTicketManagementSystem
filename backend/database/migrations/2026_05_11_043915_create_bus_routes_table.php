<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bus_routes', function (Blueprint $table) {
            $table->id();
            $table->string('origin_city');
            $table->string('destination_city');
            $table->float('distance_km',10, 2);
            $table->string('estimated_time_hours');
            $table->enum('status', ['active', 'inactive'])->default('active');

            $table->foreignId('company_id')->constrained()->onDelete('cascade');

            $table->timestamps();

            $table->unique(['company_id', 'origin_city', 'destination_city'], 'unique_company_route');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bus_routes');
    }
};
