//Funcion para pintar original
/*function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);*/
    
//Respuesta
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", function() { 
        pintar(ele, 'yellow');
    });
