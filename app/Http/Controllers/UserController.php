<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Login
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $id = Auth::user()->id;
            $user = User::find($id);
            $success = true;
            $layout =  'layout';
            $message = 'User login successfully';
        } else {
            $user = '';
            $success = false;
            $layout =  'login';
            $message = 'Unauthorised';
        }

        // response
        $response = [
            'user' => $user,
            'success' => $success,
            'layout' =>  $layout,
            'message' => $message,
        ];
        return response()->json($response);
    }

    public function checkAuth()
    {
        if (Auth::check()) {
            $id = Auth::user()->id;
            $user = User::find($id);
            $success = true;
            $layout =  'layout';
            $message = 'User login successfully';
        } else {
            $user = '';
            $success = false;
            $layout = 'login';
            $message = 'Unauthorised';
        }

        // response
        $response = [
            'user' => $user,
            'success' => $success,
            'layout' =>  $layout,
            'message' => $message,
        ];
        return response()->json($response);
    }

    /**
     * logout
     */
    public function logout()
    {
        try {
            $user = '';
            Session::flush();
            $success = false;
            $layout = 'login';
            $message = 'Successfully logged out';
        } catch (\Illuminate\Database\QueryException $ex) {
            $user = '';
            $success = false;
            $layout = 'login';
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'user' => $user,
            'success' => $success,
            'layout' =>  $layout,
            'message' => $message,
        ];
        return response()->json($response);
    }
}
