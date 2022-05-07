window.onload = () => {
    let botonServir = document.getElementById("boton-servir");
    let videoTacita = document.getElementById("tacita");
    let videoTacitaHumeando = document.getElementById("tacita-humeado");
    let estadoTacita = "vacia";    

    //Aprieto el botón de servir.
    botonServir.onclick = () => {
        //Fijarse si la taza está vacia
        if(estadoTacita == "vacia") {
            //Reproducir video de taza sirviendo
            reproducir(videoTacita);

            videoTacita.onended = () => {
                //Ocultar video
                ocultar(videoTacita);
                //Mostrar video de taza humeando
                mostrar(videoTacitaHumeando);
                //Reproducir video
                reproducir(videoTacitaHumeando, "loopear");
                //Rebobinar video de taza sirviendo 
                resetear(videoTacita);
                //Setear el estado de la taza llena
                estadoTacita = "llena";
            }
        }
    }
    
    let botonTomar = document.getElementById("boton-tomar");
    let videoTacitaTomando = document.getElementById("tacita-tomando")
    //Aprieto el botón de tomar
    botonTomar.onclick = () => {
    //Se fija si la taza tiene liquido
    if(estadoTacita == "llena") {
    //Oculta el vide de la taza humeando 
    ocultar(videoTacitaHumeando);
    //Muestra taza humeando
    mostrar(videoTacitaTomando);
    //Reproducir la taza tomando
    reproducir(videoTacitaTomando);
    //Resetea la taza humeando
    resetear(videoTacitaHumeando);

            videoTacitaTomando.onended = () => {
            //Mostrar video inicial
            mostrar(videoTacita);
            //Ocultar el video de la taza tomando
            ocultar(videoTacitaTomando);
            //Resetear el video de la taza tomando
            resetear(videoTacitaTomando);
            //Setear el estado de nuevo a vacia
            estadoTacita == "vacia";
            }
        }
    }
}

function reproducir(video, loopear)  {
    if(loopear == "loopear") {
        video.loop = true;
    }
    video.play();
}

function ocultar(video) {
    video.classList.add("display-none")
}

function mostrar(video) {
    video.classList.remove("display-none")
}

function resetear(video) {
    video.pause();
    video.currentTime = 0;
}