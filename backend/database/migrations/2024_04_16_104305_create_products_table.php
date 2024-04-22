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
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->timestamps();
            $table->string('name');
            $table->double('price');
            $table->string('description');
            $table->string('category');
            $table->blob('image');
            $table->bigInteger('number_of_ratings')->nullable();
            $table->bigInteger('number_of_sale')->nullable();
            $table->double('ratings')->default(0);
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
