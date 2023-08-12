alert("Hola")

var globlal=0;

function accion(){
    //alert("Hola accion");
}

function cambiarcolor(){
    const titulo = document.querySelector(".titulo");
    console.log(titulo);
    titulo.style.color="yellow";
    titulo.style.background="brown";
    alert(globlal);

}

function enviarmensaje(mensaje, numero){
    //const valorinput = document.getElementById("valor").value;
    const valor = document.getElementById("5").value;
    //alert(`El mensaje es: ${mensaje} y el segundo parametro es:${numero}`);
    //alert(valorinput);
    alert(valor)
}

