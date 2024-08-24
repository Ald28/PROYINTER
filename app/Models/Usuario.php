<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'usuario',
        'password',
        'perfil',
        'puntaje',
        'clientes_ID_Cliente',
    ];
    
    protected $hidden = [
        'password',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'clientes_ID_Cliente');
    }
}
