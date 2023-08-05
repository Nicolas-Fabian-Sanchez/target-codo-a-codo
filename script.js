 let listaIdioma=document.querySelector(".noMostrar");
 let icono= document.getElementById("icono");
 let esp= document.querySelector(".esp");
 let ing= document.querySelector(".ing");
 let español= document.querySelector(".es");
 let ingles = document.querySelector(".in")

 icono.addEventListener("click",()=>{
    listaIdioma.classList.toggle("mostrar")
 })
 esp.addEventListener("click",()=>{
    español.classList.add("mostrar");
    ingles.classList.remove("mostrar");
    listaIdioma.classList.remove("mostrar")
 })
 ing.addEventListener("click",()=>{
    español.classList.add("noMostrar");
    español.classList.remove("mostrar")
    ingles.classList.add("mostrar")
    listaIdioma.classList.remove("mostrar")
 })
 
 