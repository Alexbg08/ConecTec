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

