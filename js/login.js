let administrador = new User("Cristian", "Giraldo", "admin", 1234);

function mostrarValores(){
    let usuario = document.getElementById("InputUsuario").value;
    let contraseña = document.getElementById("InputContraseña").value


    if(usuario == administrador.usuario && contraseña == administrador.contraseña){
        window.location.href="index.html";
    } else {
        alert("Ha ingresado con un usuario no valido");
        alert(`Usuario valido: Usuario: ${administrador.usuario} y contraseña: ${administrador.contraseña}`)
    }

}

