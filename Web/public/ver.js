

const eventosRef = db.collection('eventos');


function mostrarEventos() {
    const eventosContainer = document.getElementById('eventosContainer');

    
    eventosContainer.innerHTML = '';

    
    eventosRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const eventoData = doc.data();
            
            
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento');

            
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = eventoData.tituloCreacionEvento ;

            const descripcionElement = document.createElement('p');
            descripcionElement.textContent = eventoData.descripcionCreacionEvento;

            const inscribirseLink = document.createElement('a');
            inscribirseLink.href = 'menuEstudiantes.html';
            inscribirseLink.textContent = 'Inscribirse';

            
            eventoDiv.appendChild(tituloElement);
            eventoDiv.appendChild(descripcionElement);
            eventoDiv.appendChild(inscribirseLink);

            
            eventosContainer.appendChild(eventoDiv);
        });
    });
}


window.addEventListener('load', mostrarEventos);