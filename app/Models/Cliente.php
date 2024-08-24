<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Cliente extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
        'name',
        'lastname',
        'country',
        'name_empresa',
        'rubro_empresa',
        'email',
        'phone',
        'charge',
        'password',
    ];
    
    protected $hidden = [
        'password',
    ];
}
