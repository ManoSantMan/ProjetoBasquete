<!DOCTYPE html>
<html>
<head>
    <title>Cadastro - BasketSync</title>
    <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
    <h2>Cadastrar</h2>
    <form onsubmit="register(event)">
        <input type="email" id="email" placeholder="Email" required><br>
        <input type="password" id="password" placeholder="Senha" required><br>
        <button type="submit">Cadastrar</button>
    </form>
    <a href="/">Login</a>

    <!-- Carrega Firebase primeiro -->
   <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
    <script src="/firebase.js"></script>

    <!-- Só depois, seu código que usa firebase -->
    <script>
        async function register(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                window.location.href = "/home";
            } catch (err) {
                alert(err.message);
            }
        }
    </script>
</body>
</html>
