<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
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
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'charge'=>'required',
            'password' => 'required|confirmed',
        ]);
        //Alta del usuario
        $user = new User();
        $user->name = $request->name;
        $user->lastname = $request->lastname;
        $user->country = $request->country;
        $user->name_empresa = $request->name_empresa;
        $user->rubro_empresa = $request->rubro_empresa;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->charge = $request->charge;
        $user->password = Hash::make($request->password);
        $user->save();
        //respuesta
        return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token', $token, 60*24);
            return response(["token" => $token,"nombre" => $user->name], Response::HTTP_OK)->withoutCookie($cookie);
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
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        $cookie = Cookie::forget('cookie_token');
        return response(["message" => "Cierre de sesión hecho, token revocado"], Response::HTTP_OK)->withCookie($cookie);
    }

    public function allUsers(){
        $users = User::all();
        return response()->json([
            "users"=>$users
        ]);
    }

}
