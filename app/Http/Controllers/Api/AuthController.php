<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'country' => 'required',
            'name_empresa' => 'required',
            'rubro_empresa' => 'required',
            'phone' => 'required|unique:clientes',
            'charge' => 'required',
            'email' => 'required|email|unique:usuarios',
            'password' => 'required|confirmed',
        ]);
    
        try {
            $cliente = Cliente::create([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'country' => $request->country,
                'name_empresa' => $request->name_empresa,
                'rubro_empresa' => $request->rubro_empresa,
                'phone' => $request->phone,
                'charge' => $request->charge,
            ]);
            
            $usuario = Usuario::create([
                'email' => $request->email,
                'usuario' => $request->name,
                'password' => Hash::make($request->password),
                'perfil' => 'Cliente',
                'clientes_ID_Cliente' => $cliente->id,
            ]);
            
            return response($usuario, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response(["message" => "Error en el servidor, inténtelo más tarde"], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }        

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']])) {
            $usuario = Auth::user();
    
            if ($usuario->clientes_ID_Cliente) {
                $token = $usuario->createToken('token')->plainTextToken;
                return response(["token" => $token, "nombre" => $usuario->usuario], Response::HTTP_OK);
            } else {
                return response(["message" => "No cuenta con perfil de cliente"], Response::HTTP_FORBIDDEN);
            }
        } else {
            return response(["message" => "Credenciales inválidas"], Response::HTTP_UNAUTHORIZED);
        }
    }
    

    public function userProfile(Request $request) {
        $user = auth()->user();
        $cliente = $user->cliente; 
    
        return response()->json([
            "message" => "Perfil de usuario OK",
            "userData" => [
                'name' => $user->usuario,
                'email' => $user->email,
                'perfil' => $user->perfil,
                'puntaje' => $user->puntaje,
                'cliente' => $cliente, 
            ]
        ], Response::HTTP_OK);
    }

    public function logout(Request $request){
        $usuario = Auth::user();
        $usuario->currentAccessToken()->delete();
        $cookie = Cookie::forget('cookie_token');
        return response(["message" => "Cierre de sesión hecho, token revocado"], Response::HTTP_OK)->withCookie($cookie);
    }    

    public function allUsers(){
        $usuarios = Usuario::all();
        return response()->json([
            "users" => $usuarios
        ]);
    }    

    public function updateUser(Request $request){
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'country' => 'required',
            'name_empresa' => 'required',
            'rubro_empresa' => 'required',
            'phone' => 'required',
            'charge' => 'required',
        ]);

        // Obtener el usuario autenticado
        $user = Auth::user();
        
        if (!$user || !$user->cliente) {
            return response()->json([
                'message' => 'El usuario o el cliente no existen.',
            ], Response::HTTP_NOT_FOUND);
        }

        $cliente = $user->cliente;

        // Actualizar los datos del cliente
        $cliente->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'country' => $request->country,
            'name_empresa' => $request->name_empresa,
            'rubro_empresa' => $request->rubro_empresa,
            'phone' => $request->phone,
            'charge' => $request->charge,
        ]);

        // Devolver la respuesta
        return response()->json([
            'message' => 'Información del cliente actualizada correctamente',
            'userData' => [
                'name' => $cliente->name,
                'lastname' => $cliente->lastname,
                'country' => $cliente->country,
                'name_empresa' => $cliente->name_empresa,
                'rubro_empresa' => $cliente->rubro_empresa,
                'phone' => $cliente->phone,
                'charge' => $cliente->charge,
            ],
        ], Response::HTTP_OK);
        }

}
