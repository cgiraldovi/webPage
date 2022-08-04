let administrador = new User("administrador", 1234);

function mostrarValores(){
    let usuario = document.getElementById("InputUsuario").value;
    let contraseña = document.getElementById("InputContraseña").value


    if(usuario == administrador.nombre && contraseña == administrador.contraseña){
        window.location.href="index.html";
    } else {
        alert("Ha ingresado con un usuario no valido");
        alert(`Usuario valido: Usuario: ${administrador.nombre} y contraseña: ${administrador.contraseña}`)
    }

}

