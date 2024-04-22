<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserCart;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'product_id';


    use HasFactory;
    protected $fillable = [
        'name',
        'price',
        'description',
        'category',
        'ratings',
        'image',
    ];

    public function carts()
    {
        return $this->hasMany(UserCart::class);
    }
}
