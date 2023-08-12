/*alert("Hola")

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
    alert(globlal)
    alert(partirmensaje());
    document.getElementById("valor").value=20;

}

function partirmensaje();
return "Mensaje Partido"
*/

//VALIDAR
function validar(valor){
//OBLIGATORIO
    const nombre = document.getElementById("Nombre").value;
    const edad = document.getElementById('edad').value;

    if (!nombre || nombre.length==0 || /^\s+$/.test(Nombre) ){
    alert("Falta el nombre")
    document.getElementById("nombre").focus()
    return false;
    }
    //numerico
    if (isNaN(edad)) {
        alert("No es un número");
        return false;
    }
    return true;
    }

    indice = document.getElementById("opciones").selectedIndex; 
if( indice == null || indice == 0 ) { 
 return false; 
} 
<select id="opciones" name="opciones"> 
 <option value="">- Selecciona un valor -</option> 
 <option value="1">Azul</option> 
 <option value="2">Rojo</option> 
 <option value="3">Morado</option> 
</select> 






