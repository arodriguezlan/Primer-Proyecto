/// Variables: string number =float,int boolean [array] date 
//Objectos: 

/*El scope=ambito
var nombre='Pedro';//Variable global, no es una buena practica
let apellido='Perez';//variable local dentro de su ambito*/

if (true) {
    var nombre = 'Pedro';//Variable global
    //let apellido='Perez';//variable local dentro de su ambito

    alert(nombre);
    //alert(apellido);
}

let bandera = true;
let edad = 15;//number
let precio = 3.35; //number
let lista = [];/*al ser de tipado puedo poner el tipo de dato que yo desee.
Ademas no tengo que declararle los espacios como en java.*/

let fecha= new Date().getDate();
alert(fecha);

// coercion
if (5 === 5) {
    alert('siiiiii');
} else {
    alert('noooooo');
}


const PI=3.14;//Son en mayuscula siempre

const Persona={
    cedula:'118480834',
    nombre:'Ashly Francinie',
    apellido:'Rodriguez Lanuza',
    edad:21
};

alert(`El nombre de la persona es ${Persona.nombre} y tiene una edad de ${Persona.edad}`)

let tiene= Persona.hasOwnProperty('edad'); //Si la variable tiene o no una propiedad
alert(tiene);

//console.log(tieneperro);//para que salga en consola, si no se le agrega valor es indefinida
let tieneperro=true;
alert(tieneperro);
tieneperro=null;

if (tieneperro){ //si es definida entra, sino indefinida, pasa al else
    alert('tiene perro');
}else{
    alert('no tiene perro');
}

let listaColores=['Rojo','Verde','Azul'];
alert(listaColores[1]);
alert(listaColores.length);


// Using a for loop
console.log('for');
for (let i = 0; i < listaColores.length; i++) {
  console.log(listaColores[i]);
}

// Using forEach loop
console.log('forEach');
listaColores.forEach((valor, index) => {
  if (index % 2 === 0) {
    console.log(`El valor: ${valor} y el indice es ${index}`);
  }
});


console.log('map');
listaColores
  .map((valor, index) => {
    console.log(`El valor: ${valor} y el indice es ${index}`);
  })
  .filter((x) => x === 'rojo');


const listaPersonas=[{
    id:'',
    nombre:'',
    apellido:'',
    edad: ''
},
{
    id:'444',
    nombre:'aaa',
    apellido:'ssss',
    edad: '60'
},
{
    id:'122',
    nombre:'juana',
    apellido:'',
    edad: ''
}
]

const listaResults = listaPersonas.map((persona, index) => {
    let nombre = `Mi nombre es ${persona.nombre}, ${persona.apellido}`;
    return {
      id: index,
      cedula: persona.cedula,
      nombre: nombre,
      edad: persona.edad
    };
  }).filter(x => x.edad > 18);
  
  console.log(listaResults);

  

    
/* EL IMPRIME DE ARRIBA PARA ABAJO, EN ORDEN, YA QUE SALUDAR 2 NO ESTA EN LA MEMORIA
function saludar2(){
    alert(prueba);
}

function saludar(){
    var prueba=5;
}

saludar2();
saludar();
};*/
