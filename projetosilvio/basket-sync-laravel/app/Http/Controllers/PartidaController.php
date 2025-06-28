<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partida;

class PartidaController extends Controller
{
    public function index()
    {
        $partidas = Partida::orderBy('data', 'asc')->get();
        return view('home', compact('partidas'));
    }

    public function create()
    {
        return view('partidas');
    }

    public function store(Request $request)
    {
        $request->validate([
            'time1' => 'required|string|max:255',
            'time2' => 'required|string|max:255',
            'local' => 'required|string|max:255',
            'data' => 'required|date',
            'hora' => 'required'
        ]);

        Partida::create($request->all());

        return redirect('/home')->with('success', 'Partida cadastrada!');
    }
}
