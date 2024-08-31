<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::all();
    }

    public function store(Request $request)
    {
        $transacao = new Transacao($request->all());
        $transacao->valor = $request->tipo === 'despesa' ? -abs($request->valor) : abs($request->valor);
        $transacao->save();
        return response()->json($transacao, 201);
    }

    public function show($id)
    {
        return Transacao::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $transacao = Transacao::findOrFail($id);
        $transacao->update($request->all());
        $transacao->valor = $request->tipo === 'despesa' ? -abs($request->valor) : abs($request->valor);
        $transacao->save();
        return response()->json($transacao, 200);
    }

    public function destroy($id)
    {
        Transacao::destroy($id);
        return response()->json(null, 204);
    }
}
