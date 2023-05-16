// TIPOS DE FUNCIONES 
// DECLARADAS VS EXPRESADAS ( 2 )


// CREAR LA FUNCION ---> DECLARAR LA FUNCION
function sumar() {
    // scope o alacance está limtado por las llaves 
    // bloque de codigo es lo que va adentro de estas llaves
    let n1 = 5
    let n2 = 6
    return n1 + n2  // siempre se usa el return en las funciones, donde está el return significa que ahi se termina la funcion
}

// DISPARAR FUNCION ---> EJECUTAR O INVOCAR
let resultado = sumar() // esto lo mostrará en pantalla y no en cosola 

function login() {
    let username = "pepito@gmail.com"
    // pregunta al backend si existe
    // si existe ---> navega a la pantalla del home
}
