var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
    };
    var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
    };
    var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
    };

     /*1)Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden
    asignar valores de variables y no quemar valores dentro del arreglo.*/
    //creo el array
    const pinguinos=[gunter,ramon,fred];
    /* 2)Escriba un ciclo for para iterar a través de cada pingüino en la matriz e
        imprima el valor de la propiedad del nombre de cada pingüino en la
        consola.*/
pinguinos.forEach((valor, index) => {
    console.log(valor);
  });
  //3)Imprima la longitud de la matriz de pingüinos en la consola.
  alert(pinguinos.length)

  /*4)Escriba un ciclo for para iterar a través de cada pingüino en la matriz y
  agregue una nueva propiedad a cada pingüino llamada numberOfFeet con
  un valor aleatorio del 1 al 5.*/
 // 4) Escriba un ciclo for para iterar a través de cada pingüino en la matriz y agregar una nueva propiedad llamada numberOfFeet con un valor aleatorio del 1 al 5.
for (let i = 0; i < pinguinos.length; i++) {
    pinguinos[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
  }
  
  console.log(pinguinos);
  

/*5)Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
    para cada pingüino que pueda volar, imprima en la consola un mensaje que
    contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
    puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
    que no pueden volar). */
    pinguinos.forEach(function(penguin) {
        if (penguin.canFly){
            console.log(`${penguin.name} puede volar!`);
        }
    });
    

/*6)Devuelva un arreglo solo
 con los pingüinos que tienen más de 2 pies. */
 
const masdeDosPies = pinguinos.filter(penguin => penguin.numberOfFeet > 2);
console.log(masdeDosPies);

 /*7)Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
    configúrela igual a una matriz que contiene una lista de tres cadenas */
    pinguinos.forEach(function(penguin) {
        if (penguin.name === 'Gunter') {
            penguin.favoriteFoods = ['atun', 'sardina', 'camaron'];
        } else if (penguin.name === 'Ramón') {
            penguin.favoriteFoods = ['alga', 'sandia', 'corbina'];
        } else if (penguin.name === 'Fred') {
            penguin.favoriteFoods = ['tortuga', 'tilapia', 'piangua'];
        }
    });
    
    
    /*8) Accede a la segunda comida favorita de sus pingüinos e imprímela en la
         consola usando console.log ()*/
         const segundasComidasFavoritas = pinguinos.map(penguin => {
            if (penguin.favoriteFoods && penguin.favoriteFoods.length >= 2) {
              return penguin.favoriteFoods[1];
            } else {
              return;
            }
          });
          
          console.log(segundasComidasFavoritas);
          

    /*9)Sin modificar nada de su código anterior, escriba una nueva línea de código
    que cambie el valor del último elemento de la lista a "piñas"
    (sobrescribiendo el valor anterior). */
    pinguinos.forEach(function(penguin) {
        if (penguin.favoriteFoods && Array.isArray(penguin.favoriteFoods) && penguin.favoriteFoods.length > 0) {
          penguin.favoriteFoods[penguin.favoriteFoods.length - 1] = 'piñas';
        }
      });
      
      
    /*10)Escriba un cilo for para recorrer cada comida en la propiedad de comida
        favorita de sus pingüinos e imprima cada una en la consola. */
        pinguinos.forEach(function(penguin) {
            penguin.favoriteFoods.forEach(function(food) {
                console.log(food);
            });
        });