

//Almacenar Nombre

let iniciar = document.getElementById("capturarNombre");
let nombre = "";

iniciar.addEventListener("click",function(){
    nombre = document.getElementById("nombre").value;
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("menu").style.display = "block";
});



// Escoger cuestionarios
let jugar1 = document.getElementById("jugar1");
let jugar2 = document.getElementById("jugar2");

//arreglos
let preguntas=[];
let respuestas=[];

//Variables

let indice = 0;
let correcto ="";
let cantidad_respuestas = 0;

jugar1.addEventListener("click",function(){

    document.getElementById("menu").style.display = "none";
    document.getElementById("tipo").innerHTML = "Historia";

    document.getElementById("titulo").style.display = "block";
    document.getElementById("contendor_preguntas").style.display = "block";
    document.getElementById("contenedor_respuestas").style.display = "block";

    //arreglos

       preguntas = [
        '¿Qué hombre puso por primera vez el pie en la luna?',
        '¿Cuál es la capital de Perú?',
        '¿Cuál es el desierto más grande del mundo?',
        '¿Cuál es el río más largo del mundo?'
        ];

        // Las primera son las respuestas
        respuestas = [
            ['Armstrong','Laika','Luis','Belmonte'],
            ['Lima','Ancash','Junin','Chorrillos'],
            ['Sahara','Desierto arenoso','Kalahari','Desierto Australia'],
            ['Río Nilo','Río Amazonas','Río Congo','Río Amarillo']
        ];
     mostrar();
     condicion();
});

jugar2.addEventListener("click",function(){

    document.getElementById("menu").style.display = "none";
    document.getElementById("tipo").innerHTML = "Entretenimiento";

    document.getElementById("titulo").style.display = "block";
    document.getElementById("contendor_preguntas").style.display = "block";
    document.getElementById("contenedor_respuestas").style.display = "block";

    //arreglos

       preguntas = [
        '¿Cuál es el nombre de la niña que visito "El país de las Maravillas"?',
        '¿Cuando se estreno la pelicula "Avengers EndGame?',
        '¿Qué personaje de Disney perdió su zapato de cristal?',
        '¿De qué nacionalidad es la cantante Shakira?'
        ];

        // Las primera son las respuestas
        respuestas = [
            ['Alicia','Fernanda','Luana','Blanca Nieves'],
            ['24 de abril del 2019','20 de abril del 2018','10 de mayo del 2019','15 de enero del 2018'],
            ['Cenicienta','Alicia','Pocahontas','Rapunzel'],
            ['Colombia','Perú','Brasil','Mexico']
        ];
     mostrar();
     condicion();
});


function mostrar(){

    //número de pregunta
    document.getElementById("npregunta").innerHTML = `Pregunta  ${indice + 1}`;
   
    let respuestas_posibles = respuestas[indice];
    correcto  = respuestas[indice][0];

    // Desordenado respuestas

    let respuestas_reordenadas = [];
    let n = respuestas_posibles.length;
    let operador = respuestas_posibles.length;

    for(let r=0 ; r < n; r++){
        let posicion_aleatoria = Math.floor(Math.random() * operador);
        respuestas_reordenadas[r] = respuestas_posibles[posicion_aleatoria];
        respuestas_posibles.splice(posicion_aleatoria,1);
        operador--;
    }



    // Agregando Etiquetas y Respuestas
    let txt_respuestas="";
    for(i in respuestas_reordenadas){
        txt_respuestas += `
            <div class="card bordes">
                <div class="card-body text-muted ">

                    <p class=" text-center  item" >${respuestas_reordenadas[i]}</p>

                </div>
            </div>`;
    }


    //Mostando Las Preguntas y Respuestas
    document.getElementById("preguntas").innerHTML = '<p class=" py-5 px-5 text-center  h5" >'+preguntas[indice]+'</p>';
    document.getElementById("respuestas").innerHTML = txt_respuestas;

}



function condicion(){
     // Generando Evento Click a los items

    let elementos = document.getElementsByClassName("item");

    for(let i = 0; i < elementos.length; i++){

        elementos[i].addEventListener("click", function(){
            indice = indice + 1;
    
                if(this.innerHTML == correcto){
                    cantidad_respuestas++;
                    if(indice < 4){
                        mostrar();
                        condicion();
                    }else{
                        final();
                    }
                    
                }else{
                    if(indice < 4){
                        mostrar();
                        condicion();
                    }else{
                        final();
                    }
                }
            
        });

    }
 }



function final(){

    document.getElementById("contendor_preguntas").style.display = "none";
    document.getElementById("contenedor_respuestas").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("jugador").innerHTML = "de " + nombre;
    if(cantidad_respuestas < 4){
        document.getElementById("estado").innerHTML = "Suerte para la proxima!";
        document.getElementById("cantidad").innerHTML = "Solo respondiste " + cantidad_respuestas;
    }else{
        document.getElementById("estado").innerHTML = "Felicidades!";
        document.getElementById("cantidad").innerHTML = "A buena hora respondiste " + cantidad_respuestas;
    }

}

 
const casa = document.getElementById("casa");
const intentar = document.getElementById("intentar");



intentar.addEventListener("click", function(){
    indice = 0;
    correcto ="";
    cantidad_respuestas = 0;
    mostrar();
    condicion();
    document.getElementById("final").style.display = "none";
    document.getElementById("contendor_preguntas").style.display = "block";
    document.getElementById("contenedor_respuestas").style.display = "block";   
})

casa.addEventListener("click", function(){
    preguntas=[];
    respuestas=[];
    indice = 0;
    correcto ="";
    cantidad_respuestas = 0;
    document.getElementById("final").style.display = "none";
    document.getElementById("menu").style.display = "block";     
})