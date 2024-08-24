<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('usuario');
            $table->string('password');
            $table->enum('perfil', ['Jugador', 'Invitado', 'Cliente', 'Proveedor', 'Ambos']);
            $table->integer('puntaje')->nullable();
            $table->foreignId('clientes_ID_Cliente')->nullable()->constrained('clientes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('usuarios');
    }
};
