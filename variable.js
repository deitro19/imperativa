let nombre = "pepito";

console.log(nombre);

nombre = "juan";

nombre = 22;

console.log(nombre);

const APELLIDO = "perez";


// TIPO DE DATOS 

// CADENA DE TEXTO
let nombreDeUsuario = "jorge duje"

// NUMBER
let edad = 30
let precio = 15.5

// BOOLEANOS ---> TRUE / FALSE
let esMayorDeEdad = true

// UNDEFINED
let numero = undefined

let numero2 = null

// NaN
console.log( nombreDeUsuario * edad);


// OPERADORES

// matematicos

let n1 = 10
let n2 = 5 

console.log( n1 + n2);
console.log( n1 - n2);
console.log( n1 * n2);
console.log( n1 / n2);

console.log( n1 % n2);

let nombre1 = "juancito"
let apellido1 = "perez"

// conosole.log("hola juancito perez como estas?")
console.log(" Hola " + nombre1 + " " + apellido1 + " como estas? ");

// template literals ---> backsticks
console.log( `Hola ${nombre1} ${apellido1} como estas? ${ 10 + 10 } ` );


// COMPARACION ---> siempre cuando se resuelve la comparacion me devuelve un booleano

let a = 2
let b = 5

let a_es_mayor = a > b
let b_es_mayor = a < b
console.log(a_es_mayor);
console.log(b_es_mayor);

console.log( a <= b );
console.log( a >= b);

let c = 12
let d = "12"

// COMPARACION SIMPLE
console.log( a == b );
console.log( a != b);

// COMPARACION ESTRICTA
console.log( c === d );
console.log( c !== d );


// OPERADOR AND ( && ) si uno es false ya el resto lo va a tomar como fale
// OPERADOR OR ( || ) con uno es true ya todos va a dar true

let y = 15 
let z = 21
let nombree = "pepito"

let seCumple = y > z && 12 === 12

console.log(seCumple);

// TRUTHY ---> true . "dasdasda", 1231, []
// FALSY ---> false , "", 0, null, undefined

// LOGGED === TRUE
// ROL === "ADMIN"

// PANTALLA DE MODIFICAR PRODUCTO

let isLogged = true
let rol = "client"

let tienePermiso = true

console.log(tienePermiso ? "accede a la pantalla" : "no accede a la pantalla");