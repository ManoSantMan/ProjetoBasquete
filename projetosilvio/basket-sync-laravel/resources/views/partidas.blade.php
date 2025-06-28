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
    <form method="POST" action="/partidas">
        @csrf
        <input type="text" name="time1" placeholder="Nome do Time 1" required><br>
        <input type="text" name="time2" placeholder="Nome do Time 2" required><br>
        <input type="text" name="local" placeholder="Local" required><br>
        <input type="date" name="data" required><br>
        <input type="time" name="hora" required><br>
        <button type="submit">Cadastrar Partida</button>
    </form>

    <br>
    <a href="/home">Voltar para Home</a>

    <script>
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location.href = "/";
            }
        });
    </script>
</body>
</html>
