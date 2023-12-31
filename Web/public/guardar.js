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
        window.location.href = 'index.html';
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
        window.location.href = 'index.html';
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
        window.location.href = 'index.html';
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
        window.location.href = 'menuAsociacion.html';
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}
function guardarAgenda(){
    db.collection("programarEventos").add({
        nombreEvento: document.getElementById("nombreEvento").value,
        fechaEvento: document.getElementById("fechaEvento").value,
        responsablesA: document.getElementById("responsablesA").value,
        RecursosAgenda: document.getElementById("RecursosAgenda").value
        
    })
    .then((docRef) => {
        alert("Registro correcto")
        window.location.href = 'menuAsociacion.html';
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}
function guardarFormulario(){
    db.collection("formularioPropuestas").add({
        EventoFor: document.getElementById("EventoFor").value,
        TematicaFor: document.getElementById("TematicaFor").value,
        objetivoFor: document.getElementById("objetivoFor").value,
        actividadesFor: document.getElementById("actividadesFor").value,
        cantidadFor: document.getElementById("cantidadFor").value
        
    })
    .then((docRef) => {
        alert("Registro correcto")
        window.location.href = 'menuEstudiantes.html';
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });

}