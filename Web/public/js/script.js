function redireccionarCrearEvento() {
    window.location.href = 'crearEvento.html';
}

function redireccionarProgramarEvento() {
    window.location.href = 'programacionAgenda.html';
}

function redireccionarInscripcion() {
    window.location.href = 'inscripcionEvento.html';
}
function redireccionarFormulario() {
    window.location.href = 'formularioPropuesta.html';
}

function iniciarSesion() {
    const email = document.getElementById("correoId").value;
    const password = document.getElementById("contraseId").value;

    const consultaColaboradores = db.collection("colaboradores")
        .where("correoColaborador", "==", email)
        .get();

    const consultaAsistentes = db.collection("asociaciones")
        .where("emailAsociaciones", "==", email)
        .get();

    const consultaEstudiantes = db.collection("estudiantes")
        .where("correoEstudiante", "==", email)
        .get();

    Promise.all([consultaColaboradores, consultaAsistentes, consultaEstudiantes])
        .then(([colaboradoresSnapshot, asistentesSnapshot, estudiantesSnapshot]) => {

            if (!colaboradoresSnapshot.empty) {

                const usuario = colaboradoresSnapshot.docs[0].data();
                if (usuario.contraseñaColaborador === password) {
                    window.location.href = "menuAsociacion.html";
                } else {
                    alert("Contraseña incorrecta. Verifica tus credenciales.");
                }
            } else if (!asistentesSnapshot.empty) {

                const usuario = asistentesSnapshot.docs[0].data();
                if (usuario.contrasenaAsociacion === password) {
                    window.location.href = "menuAsociacion.html";
                } else {
                    alert("Contraseña incorrecta. Verifica tus credenciales.");
                }
            } else if (!estudiantesSnapshot.empty) {

                const usuario = estudiantesSnapshot.docs[0].data();
                if (usuario.contrasena === password) {
                    window.location.href = "menuEstudiantes.html";
                } else {
                    alert("Contraseña incorrecta. Verifica tus credenciales.");
                }
            } else {

                alert("El correo no se encuentra registrado.");
            }
        })
        .catch((error) => {
            console.error("Error al buscar el usuario en las colecciones:", error);
        });
}
