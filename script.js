'use strict'

let cajaTexto = document.querySelector('#texto');

cajaTexto.addEventListener('keyup', () => {inicia(cajaTexto.value)});




function inicia(texto){
    let ajax=new XMLHttpRequest();
    let datos=new FormData(); //Permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest
    datos.append("param",texto);
    ajax.addEventListener("load",mostrar,false);//Se lanza al completarse con éxito
    ajax.open("POST","getSugerencia.php",true);//Método POST, llama al fichero 
    ajax.send(datos); //Método SEND, como es POST manda los datos del FormData "datos"
 }
 
 function mostrar(e){
    let  resultado=document.getElementById("txtSugerencia");
    resultado.innerHTML=e.target.responseText;
 }