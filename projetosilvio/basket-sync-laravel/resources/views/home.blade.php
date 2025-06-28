<!DOCTYPE html>
<html>
<head>
    <title>Home - BasketSync</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
    <script src="/firebase.js"></script>
</head>
<body>
    <h2>Partidas Cadastradas</h2>

    @if(session('success'))
        <p style="color: #f68b1e;">{{ session('success') }}</p>
    @endif

    <ul id="lista-partidas">
        @foreach($partidas as $partida)
            <li>{{ $partida->time1 }} vs {{ $partida->time2 }} - {{ $partida->local }} - {{ $partida->data }} às {{ $partida->hora }}</li>
        @endforeach
    </ul>

    <a href="/partidas">Cadastrar nova partida</a><br><br>

    <button onclick="logout()">Sair</button>

    <script>
        function logout() {
            firebase.auth().signOut().then(() => {
                window.location.href = "/";
            });
        }

        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location.href = "/";
            }
        });
    </script>
</body>
</html>
