class User{
    constructor(nombre, contraseña){
        this.nombre = nombre;
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