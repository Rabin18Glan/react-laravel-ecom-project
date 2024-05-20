<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function getUsers()
    {
        $users = User::select('email', 'name')->get();
        if (count($users) > 0) {
            $response = [
                'message' => count($users) . ' users found',
                'status' => 1,
                'size' => count($users),
                'data' => $users
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                'message' => count($users) . 'users found',
                'status' => 0,
            ];
            return response()->json($response, 200);
        }
    }

    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [

            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:8', 'confirmed'],
            'password_confirmation' => ['required']

        ]);
        if ($validate->fails()) {
            return response()->json($validate->messages(), 400);
        } else {
            DB::beginTransaction();
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ];
            try {
                // p($data);
                $user =  User::create($data);
                DB::commit();
                $token = $user->createToken("auth_token")->accessToken;
                if ($user->email == env('ADMIN')) {
                    config(['ADMIN_TOKEN' => $token]);
                }
                return response()->json([
                    'token' => $token,
                    'user' => [
                        'user_id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,

                    ],
                    'message' => "user registered successfully",
                    'status' => 1,
                ], 200);
              
            } catch (\Exception $e) {
                DB::rollBack();
                // p($data);
                return response()->json($e);
            }
          
        }

        //
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [

            'email' => ['required', 'email'],
            'password' => ['required', 'min:8'],

        ]);
        if ($validate->fails()) {
            return response()->json($validate->messages(), 400);
        } else {
            try {
                // p($data);
                $user =  User::where('email', $request->email)->first();
                if ($user != null) {
                    if (!Hash::check($request->password, $user->password)) {
                        return response()->json(
                            [
                                'message' => 'Invalid password',
                                'status' => 0
                            ],
                            400
                        );
                    } else {
                        $token = $user->createToken("auth_token")->accessToken;
                        if ($user->email == env('ADMIN')) {
                            config(['ADMIN_TOKEN' => $token]);
                        }

                        return response()->json([
                            'token' => $token,
                            'user' => [
                                'user_id' => $user->id,
                                'name' => $user->name,
                                'email' => $user->email,

                            ],
                            'message' => "Logged In successfully",
                            'status' => 1,
                        ], 200);
                    }
                } else {
                    return response()->json(
                        [
                            'message' => 'No User Found',
                            'status' => 0
                        ],
                        400
                    );
                }
            } catch (\Exception $e) {
                
                return response()->json(
                    [
                        'message' => 'Internal server error',
                        'status' => 0,
                        'error' => $e,
                    ],
                    500
                );
            }
        }

        //
    }
}
