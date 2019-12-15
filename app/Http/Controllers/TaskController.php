<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
class TaskController extends Controller
{
    


    // public function __construct()
    // {
    //   JWTAuth::parseToken()->authenticate();
    // }
    public function index()
    {
    	
    	return "It's Working";
    }
}
