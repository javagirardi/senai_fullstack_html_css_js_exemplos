console.log("Funcionando");


function realizarLogin() {


    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email) {
        document.getElementById("email").style.borderColor = "tomato";
        //document.getElementById("error_email").innerText = "O email é obrigatório";
        return;
    } else if (!senha) {
        document.getElementById("senha").style.borderColor = "tomato";
        return;
    }


    if (email === "senai@gmail.com" && senha === "senai") {
        window.location.href = "./home.html";
    } else alert("USUARIO OU SENHA INCORRETO")

}

function exibeSenha() {

    let campoSenha = document.getElementById("senha").type;

    if (campoSenha === "text") {
        document.getElementById("senha").type = "password";
    } else if (campoSenha === "password") {
        document.getElementById("senha").type = "text";
    }
}

