<!DOCTYPE html>
<html>
<head>
    <title>Cadastrar Partida - BasketSync</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"></script>
    <script src="/firebase.js"></script>
</head>
<body>
    <h2>Nova Partida</h2>
    <form method="POST" action="/partidas" class="formulario">
        @csrf

        <input type="text" name="time_casa" placeholder="Nome do Time da Casa" required>
        <input type="text" name="time_visitante" placeholder="Nome do Time Visitante" required>
        <input type="date" name="data_partida" min="{{ date('Y-m-d') }}" required>

        <button type="submit">Cadastrar Partida</button>
    </form>

    <br>
    <a href="/home" class="btn-voltar">Voltar para Home</a>

    <script>
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location.href = "/";
            }
        });
    </script>
</body>
</html>
