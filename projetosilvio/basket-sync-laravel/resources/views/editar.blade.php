<!DOCTYPE html>
<html>
<head>
    <title>Editar Partida - BasketSync</title>
    <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
    <h2>Editar Partida</h2>

    <form action="/partidas/{{ $partida['id'] }}" method="POST">
        @csrf
        @method('PUT')

        <label>Time da Casa:</label>
        <input type="text" name="time_casa" value="{{ $partida['time_casa'] }}" required><br>

        <label>Time Visitante:</label>
        <input type="text" name="time_visitante" value="{{ $partida['time_visitante'] }}" required><br>

        <label>Data da Partida:</label>
        <input
            type="date"
            name="data_partida"
            value="{{ \Carbon\Carbon::parse($partida['data_partida'])->format('Y-m-d') }}"
            min="{{ date('Y-m-d') }}"
            required
        ><br>

        <button type="submit">Salvar</button>
    </form>

    <a href="/home">Voltar</a>
</body>
</html>
