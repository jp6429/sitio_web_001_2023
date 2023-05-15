document.getElementById("error_rut").style.display="none";
document.getElementById("error_nombre_min").style.display="none";
document.getElementById("error_nombre_max").style.display="none";
document.getElementById("error_apellido_min").style.display="none";
document.getElementById("error_apellido_max").style.display="none";
document.getElementById("error_email").style.display="none";
document.getElementById("ocultar_pass").style.display="none";
document.getElementById("error_password").style.display="none";
document.getElementById("error_carrera").style.display="none";
document.getElementById("error_genero").style.display="none";
document.getElementById("error_nacimiento").style.display="none";

function validarFormulario() {
    let rut = document.getElementById("txtRut").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let carrera = document.getElementById("carrera").value;
    let femenino = document.getElementById("femenino").value;
    let masculino = document.getElementById("masculino").value;
    let fecha_nac = document.getElementById("fecha_nac").value;

    //Validación Rut
    if (rut.trim().length == 0){
        document.getElementById("error_rut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_rut").style.display = "none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
    }

    //Validación Nombre
    if (nombre.trim().length == 0){
        document.getElementById("error_nombre_min").style.display = "inline";
        document.getElementById("error_nombre_max").style.display = "none";
        document.getElementById("nombre").classList.add("is-invalid");
    }
    else if(nombre.trim().length > 30){
        document.getElementById("error_nombre_max").style.display = "inline";
        document.getElementById("error_nombre_min").style.display = "none";
        document.getElementById("nombre").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_nombre_min").style.display = "none";
        document.getElementById("error_nombre_max").style.display = "none";
        document.getElementById("nombre").classList.remove("is-invalid");
        document.getElementById("nombre").classList.add("is-valid");
    }

    //Validación Apellido
    if (apellido.trim().length == 0){
        document.getElementById("error_apellido_min").style.display = "inline";
        document.getElementById("error_apellido_max").style.display = "none";
        document.getElementById("apellido").classList.add("is-invalid");
    }
    else if(apellido.trim().length > 30){
        document.getElementById("error_apellido_max").style.display = "inline";
        document.getElementById("error_apellido_min").style.display = "none";
        document.getElementById("apellido").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_apellido_min").style.display = "none";
        document.getElementById("error_apellido_max").style.display = "none";
        document.getElementById("apellido").classList.remove("is-invalid");
        document.getElementById("apellido").classList.add("is-valid");
    }

    //Validacion EMAIL
    let rgEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (rgEmail.test(email) == false){  
        document.getElementById("error_email").style.display = "inline";
        document.getElementById("email").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_email").style.display = "none";
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
    }

    //Validacion PASSWORD
    let rgPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;
    if(rgPass.test(password) == false){
        document.getElementById("error_password").style.display = "inline";
        document.getElementById("password").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_password").style.display = "none";
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
    }

    //Validacion CARRERA
    if(carrera == null){
        document.getElementById("error_carrera").style.display = "inline";
        document.getElementById("carrera").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_carrera").style.display = "none";
        document.getElementById("carrera").classList.remove("is-invalid");
        document.getElementById("carrera").classList.add("is-valid");
    }

    //Validacion GENERO
    let genero = document.getElementsByName("genero");
    let seleccion = 0;
    for(let i=0; i < genero.length; i++){
        if(genero[i].checked){
            seleccion++;
        }
    }
    if(seleccion == 0){
        document.getElementById("error_genero").style.display = "inline";
        document.getElementById("genero").classList.add("is-invalid");
    }
    else{
        document.getElementById("error_genero").style.display = "none";
        document.getElementById("genero").classList.remove("is-invalid");
        document.getElementById("genero").classList.add("is-valid");
    }

}

function password(){
    let input = document.getElementById("password");

    if(input.type == "password"){
        input.type = "text";
        document.getElementById("mostrar_pass").style.display = "none";
        document.getElementById("ocultar_pass").style.display = "inline";
    }
    else{
        input.type = "password";
        document.getElementById("mostrar_pass").style.display = "inline";
        document.getElementById("ocultar_pass").style.display = "none";
    }   

}