function guardar(){
    db.collection("estudiantes").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("apellidos").value,
        areaDestudio: document.getElementById("areaDestudio").value,
        carne: document.getElementById("carne").value,
        contrasena: document.getElementById("contrasena").value

       
        
    })
    .then((docRef) => {
        alert("Registro correcto")
    })
    .catch((error) => {
        alert("Registro incorrecto")
    });


}