function ver(){
    db.collection("eventos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("imprimir").innerHTML= console.log(` ${doc.data().tituloCreacionEvento}`);
            
        });
    });
}