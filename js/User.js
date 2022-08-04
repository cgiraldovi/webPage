class User{
    constructor(nombre, apellido, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    get nombreUsuario(){
        return this.nombre;
    }

    set nuevaContraseña(contraseña){
        this.contraseña = contraseña;
    }

    get contraseñaUsuario(){
        return this.contraseña;
    }

    set nuevoNombre(nombre){
        this.nombre = nombre;
    }
}   