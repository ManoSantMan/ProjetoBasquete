<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PartidaController extends Controller
{
    public function index()
    {
        $response = Http::get(env('API_URL') . '/partidas');

        if ($response->successful()) {
            $dados = $response->json();      // Aqui define $dados
            $partidas = $dados['data'] ?? []; // Pega o array 'data' do retorno
            return view('home', compact('partidas'));
        }
        
        return abort(500, 'Erro ao carregar partidas da API.');
    }

    public function create()
    {
        return view('partidas');
    }

    public function store(Request $request)
    {
        $request->validate([
            'time_casa' => 'required|string|max:255',
            'time_visitante' => 'required|string|max:255',
            'data_partida' => 'required|date',
        ]);

        $response = Http::post(env('API_URL') . '/partidas', [
            'time_casa' => $request->input('time_casa'),
            'time_visitante' => $request->input('time_visitante'),
            'data_partida' => $request->input('data_partida'),
        ]);

        if ($response->successful()) {
            return redirect('/home')->with('success', 'Partida cadastrada!');
        }

        return back()->withErrors('Erro ao cadastrar partida.');
    }
    public function edit($id)
    {
        $response = Http::get(env('API_URL') . "/partidas/{$id}");
        

        if ($response->successful()) {
            $json = $response->json();
            $partida = $json['data'] ?? $json;


            if (!$partida) {
                return redirect('/home')->withErrors('Partida não encontrada.');
            }
        
        return view('editar', compact('partida'));
    }

    return redirect('/home')->withErrors('Erro ao buscar partida.');
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'time_casa' => 'required|string|max:255',
            'time_visitante' => 'required|string|max:255',
            'data_partida' => 'required|date|after_or_equal:today',
        ]);

        $response = Http::put(env('API_URL') . "/partidas/{$id}", [
            'time_casa' => $request->input('time_casa'),
            'time_visitante' => $request->input('time_visitante'),
            'data_partida' => $request->input('data_partida'),
        ]);

        if ($response->successful()) {
            return redirect('/home')->with('success', 'Partida atualizada com sucesso!');
        }

        return back()->withErrors('Erro ao atualizar partida.');
    }


    public function destroy($id)
    {
        $response = Http::delete(env('API_URL') . "/partidas/{$id}");

        if ($response->successful()) {
            return redirect('/home')->with('success', 'Partida excluída com sucesso!');
        }

        return back()->withErrors('Erro ao excluir a partida.');
    }

}
