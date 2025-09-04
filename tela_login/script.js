document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if(email === "admin" && senha === "123") {
                alert("Login realizado com sucesso!");
            } else {
                alert("E-mail/Usuário ou Senha incorretos.");
            }
        });