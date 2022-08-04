const usuarios = [
    new User("jonny", "joestar", "jojo", 1234),
    new User("danny", "puto", "dannyputo", 4321)
]



function volver(){
    window.location.href="login.html";
}

function crear(){
    let nombre = document.getElementById("InputNombre").value;
    let apellido = document.getElementById("InputApellido").value;
    let usuario = document.getElementById("InputUsuario").value;
    let contraseña = document.getElementById("InputContraseña").value

    if(nombre != "" && apellido != "" && usuario != "" && contraseña != ""){
        const nuevoUsuario = new User(nombre, apellido, usuario, contraseña);

        let listaUsuarios = []
        for(let contador = 0; contador < usuarios.length; contador++){
            listaUsuarios.push(usuarios[contador].usuario)
        }

       if(!listaUsuarios.includes(nuevoUsuario.usuario)){ 
            usuarios.push(nuevoUsuario)
            alert("Se ha creado el usuario de forma correcta")
            window.location.href="login.html"
       } else {
        alert("El nombre de usuario escrito ya existe")
       }

    } else {
        alert("ha ingresado alguno de los datos de forma erronea")
    }
}