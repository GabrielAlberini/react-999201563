// Variables
// Reserva de memoria RAM en mi computadora

// sintaxis
let edad = 31

console.log(edad)

edad = "zapato"

console.log(edad)

const password = "pepe123"
// password = 1

const PI = 3.1416

// datos primitivos -> unidad de info
// datos complejos/compuestos -> conjunto de datos

const dni = 123456789
const apellido = "Alberini"
const tengoLicencia = false // true
let tenesMascota = undefined
let tenesAhorros = null

// los datos primitivos son inmutables
// dni = 1111111111
console.log(dni)

// objetos
// arrays

// colección de valores
const mascota1 = {
  nombre: "arandela",
  edad: 6,
  comidaFavorita: "todo",
  color: "marrón"
}

const compra = {
  fechaDeCompra: "28 de noviembre de 2025",
  producto: "PC",
  precio: 1000,
  cliente: "Pedrito"
}

console.log(mascota1.color)
mascota1.amiga = "peperina"

console.log(mascota1)

// UNA VARIABLE CONSTANTE ASEGURA ALMACENAR SIEMPRE EL MISMO TIPO DE DATO

// datos compuestos son MUTABLES

mascota1.peso = 13

console.log(mascota1)

// mascota1 = "lalalala"

mascota1.comidaFavorita = 1

// array -> listar ordenadamente un conjunto de data
const alumnos = ["Luis", "Bruno", "Andres", "Andrea", "Argenis"]

console.log(alumnos[5])

// javascript cuenta desde el 0

alumnos.push("Gastón")

console.log(alumnos)

console.log(alumnos[123])

const listaDeDatosMezclados = [1, true, {}, [], undefined]

console.log(listaDeDatosMezclados)

// operadores algoritmicos
// operaciones matemáticas

// +
// -
// /
// *

console.log(1 * 1)

// **
// %

console.log(2 ** 2)
console.log(4 ** 2)
console.log(3 ** 3)

console.log("----------------")
console.log("- Resto -")
console.log(10 % 3)
console.log(15 % 6)

console.log(123716237123613 % 2 === 1)

// operadores de comparación
// siempre dan un valor booleano (porque siempre son una pregunta)

// Hacete un programa que valide si sos mayor de edad para entrar a esta fiesta...

// declaración de funcion
function validarEdad(edad) {
  if (edad > 17) {
    console.log("Podes pasar, sos mayor de edad")
  } else {
    console.log("No podes pasar, sos menor de edad")
  }
}

validarEdad(19)

// === es igual?
console.log(4 === "hola")
// es menor?
console.log(4 < 3)
console.log(3 > 2)

const passGuardadaEnLaBaseDeDatos = "pepe123"
let passQueIngresoElUsaurio = "pepe12"

console.log(passGuardadaEnLaBaseDeDatos !== passQueIngresoElUsaurio)

const publico = 13

// estructuras de control
// condicional


if (publico >= 17) {
  console.log("Puedes pasar")
} else {
  console.log("No puedes pasar")
}

// NaN -> not a number
console.log(1 * "hola")

// Ah ok, querés unir texto
// 1123 -> "1123"
console.log(1123 + "1")

// concatenación
console.log("Hola" + "mundo" + "!")

// template string
// back stick ´´ -> ``

// interpolación de datos
// mezclar js con un texto
let nombreCompleto = "Gabriel Alberini"
console.log(`Hola a todos soy ${nombreCompleto}`)