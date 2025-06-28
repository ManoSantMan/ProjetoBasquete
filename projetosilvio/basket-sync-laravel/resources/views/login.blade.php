<!DOCTYPE html>
<html>
<head>
    <title>Login - BasketSync</title>
    <link rel="stylesheet" href="/css/style.css" />

    <!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
    <script src="/firebase.js"></script>
</head>
<body>
    <h2>Login</h2>
    <form onsubmit="login(event)">
        <input type="email" id="email" placeholder="Email" required><br>
        <input type="password" id="password" placeholder="Senha" required><br>
        <button type="submit">Entrar</button>
    </form>
    <a href="/register">Criar conta</a>

    <script>
        async function login(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                window.location.href = "/home";
            } catch (err) {
                alert("Erro ao entrar: " + err.message);
            }
        }
    </script>
</body>
</html>
