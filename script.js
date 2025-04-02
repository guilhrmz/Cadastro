document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let campos = document.querySelectorAll(".form-control");
    campos.forEach(campo => campo.classList.remove("is-invalid"));
    
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");

    if (nome.value === "") {
        nome.classList.add("is-invalid");
        isValid = false;
    }

    if (email.value === "") {
        email.classList.add("is-invalid");
        isValid = false;
    }

    if (senha.value === "") {
        senha.classList.add("is-invalid");
        isValid = false;
    }

    if (confirmarSenha.value === "") {
        confirmarSenha.classList.add("is-invalid");
        isValid = false;
    }

    if (senha.value !== confirmarSenha.value) {
        confirmarSenha.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        window.location.href = "view.html";
    }
});
