function guardar(){
    db.collection("estudiantes").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("apellidos").value,
        areaDestudio: document.getElementById("areaDestudio").value,
        carne: document.getElementById("carne").value,
        contrasena: document.getElementById("contrasena").value,
        correoEstudiante: document.getElementById("correoEstudiante").value
        
    })
    .then((docRef) => {
        alert("Registro correcto")
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}

function guardarColaborador(){
    db.collection("colaboradores").add({
        nombreColaborador: document.getElementById("nombreColaborador").value,
        apellidosColaborador: document.getElementById("apellidosColaborador").value,
        numeroTelefonoC: document.getElementById("numeroTelefonoC").value,
        correoColaborador: document.getElementById("correoColaborador").value,
        descripcionColaborador: document.getElementById("descripcionColaborador").value,
        contraseñaColaborador: document.getElementById("contraseñaColaborador").value

        
    })
    .then((docRef) => {
        alert("Registro correcto")
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}

function guardarAsociacion(){
    db.collection("asociaciones").add({
        nombreAsociacion: document.getElementById("nombreAsocacion").value,
        ContactoAsociacion: document.getElementById("ContactoAsociacion").value,
        emailAsociaciones: document.getElementById("emailAsociaciones").value,
        DescripcionAsociaciones: document.getElementById("DescripcionAsociaciones").value,
        CodigoAsociacion: document.getElementById("CodigoAsociacion").value,
        IntegranteAsociacion: document.getElementById("IntegranteAsociacion").value,
        contrasenaAsociacion: document.getElementById("contrasenaAsociacion").value

        
    })
    .then((docRef) => {
        alert("Registro correcto")
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}
function guardarCreacionEvento(){
    db.collection("eventos").add({
        tituloCreacionEvento: document.getElementById("tituloCreacionEvento").value,
        fechaCreacionEvento: document.getElementById("fechaCreacionEvento").value,
        duracionCreacionEvento: document.getElementById("duracionCreacionEvento").value,
        responsablesCreacionEvento: document.getElementById("responsablesCreacionEvento").value,
        requisitosEspecialesCreacionEvento: document.getElementById("requisitosEspecialesCreacionEvento").value,
        descripcionCreacionEvento: document.getElementById("descripcionCreacionEvento").value,
        lugarCreacionEvento: document.getElementById("lugarCreacionEvento").value,
        categoriaCreacionEvento: document.getElementById("categoriaCreacionEvento").value,
        capacidadCreacionEvento: document.getElementById("capacidadCreacionEvento").value,
        colaboradorCreacionEvento: document.getElementById("colaboradorCreacionEvento").value

        
    })
    .then((docRef) => {
        alert("Registro correcto")
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}