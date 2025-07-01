<!DOCTYPE html>
<html>
<head>
    <title>Home - BasketSync</title>
   <link rel="stylesheet" href="{{ asset('css/style.css') }}">
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
    @forelse($partidas as $partida)
    <li>
    <span>
        {{ $partida['time_casa'] }} vs {{ $partida['time_visitante'] }} -
        {{ \Carbon\Carbon::parse($partida['data_partida'])->format('d/m/Y') }}
    </span>

    <div class="acoes">
        <!-- LINK CORRETO PARA EDIÇÃO -->
        <a href="{{ url('/partidas/' . $partida['id'] . '/editar') }}">Editar</a>

        <!-- FORMULÁRIO DE EXCLUSÃO -->
        <form action="/partidas/{{ $partida['id'] }}" method="POST" style="display:inline;">
            @csrf
            @method('DELETE')
            <button type="submit" onclick="return confirm('Tem certeza que deseja excluir esta partida?')">Excluir</button>
        </form>
    </div>
</li>


    @empty
        <li>Nenhuma partida encontrada.</li>
    @endforelse

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
