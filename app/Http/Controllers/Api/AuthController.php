<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cliente; // Cambiado de User a Cliente
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request){
        //Validacion de datos
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'country'=>'required',
            'name_empresa' => 'required',
            'rubro_empresa' => 'required',
            'email' => 'required|email|unique:clientes',
            'phone' => 'required|unique:clientes',
            'charge'=>'required',
            'password' => 'required|confirmed',
        ]);
        // Alta del cliente
        $cliente = new Cliente(); 
        $cliente->name = $request->name;
        $cliente->lastname = $request->lastname;
        $cliente->country = $request->country;
        $cliente->name_empresa = $request->name_empresa;
        $cliente->rubro_empresa = $request->rubro_empresa;
        $cliente->email = $request->email;
        $cliente->phone = $request->phone;
        $cliente->charge = $request->charge;
        $cliente->password = Hash::make($request->password);
        $cliente->save();
        // Respuesta
        return response($cliente, Response::HTTP_CREATED);
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if(Auth::attempt($credentials)){
            $cliente = Auth::user();
            $token = $cliente->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token', $token, 60*24);
            return response(["token" => $token, "nombre" => $cliente->name], Response::HTTP_OK)->withoutCookie($cookie);
        }else{
            return response(["message"=>"Credenciales invalidas"],Response::HTTP_UNAUTHORIZED);
        }
    }

    public function userProfile(Request $request){
        return response()->json([
            "message"=>"Perfil de usuario OK",
            "userData"=>auth()->user()
        ], Response::HTTP_OK);
    }

    public function logout(Request $request){
        $cliente = Auth::user();
        $cliente->currentAccessToken()->delete();
        $cookie = Cookie::forget('cookie_token');
        return response(["message" => "Cierre de sesión hecho, token revocado"], Response::HTTP_OK)->withCookie($cookie);
    }

    public function allUsers(){
        $clientes = Cliente::all();
        return response()->json([
            "users"=>$clientes
        ]);
    }
}
