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
    const indice = document.getElementById("opciones").selectedIndex; 
    const email = document.getElementById("email").value; 

    var ano = parseInt(document.getElementById("ano").value); 
    var mes = parseInt(document.getElementById("mes").value) - 1; // Los meses en JavaScript comienzan desde 0
    var dia = parseInt(document.getElementById("dia").value); 
    var valor = new Date(ano, mes, dia); 

    var valor = document.getElementById("cedula").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
   
    var formulario = document.getElementById("formulario");
    var checkboxes = formulario.elements;

    var opciones = document.getElementsByName("opciones");
    var seleccionado = false;

    if (!nombre || nombre.length==0 || /^\s+$/.test(Nombre) ){
    alert("Falta el nombre")
    document.getElementById("nombre").focus()
    return false;
    }//obligatorio
    //numerico
    if (isNaN(edad)) {
        alert("No es un número");
        return false;
    }//numerico
    return true;

    if( indice == null || indice == 0 ) { 
    return false; 
    }//indice
    if (!email || email.trim().length === 0) {
        alert("El campo de correo es obligatorio");
    } else if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        alert("No es un formato de correo válido");
    }//indice
    if (!email || email.trim().length === 0) {
        alert("El campo de correo es obligatorio");
        return false;
    } else if (!validarCorreo(email)) {
        alert("La dirección de correo no es válida o no es de Gmail.");
        return false;
    }//email
    if (isNaN(valor) || valor.getDate() !== dia || valor.getMonth() !== mes || valor.getFullYear() !== ano) { 
        alert("Fecha no válida");
    } else {
        alert("Fecha válida");
    }//fecha

    if (!(/^\d{8}[A-Z]$/.test(valor))) { 
        alert("La cédula no cumple con el formato requerido");
        return false; 
    } 
    
    if (valor.charAt(8) != letras[(parseInt(valor.substring(0, 8)) % 23)]) { 
        alert("El dígito de control de la cédula no es válido");
        return false; 
    } 

    alert("Cédula válida");
    return true;
    
      for (var i = 0; i < checkboxes.length; i++) {
        var elemento = checkboxes[i];
        if (elemento.type === "checkbox") {
            if (!elemento.checked) {
                alert("Debes seleccionar todas las opciones");
                return false;
            }
        }
    }
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        alert("Debes seleccionar al menos una opción");
        return false;
    }

    alert("Has seleccionado al menos una opción");
    return true;
}

    alert("Todas las opciones han sido seleccionadas");
    return true;
