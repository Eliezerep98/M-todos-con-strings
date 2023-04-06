/*
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/
let nombre = "Eliezer Emilio"
let apellido = "Pérez Romero"

let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

let estudianteMayus = (estudiante.toUpperCase())
console.log(estudianteMayus)

let estudianteMinus = (estudiante.toLowerCase())
console.log(estudianteMinus)

let estu_long = (estudiante.length)
console.log(estu_long)

let first_letter = (nombre.charAt(0))
console.log(first_letter)

let last_letter = (apellido.charAt(11))
console.log(last_letter)

let cad_delete = (estudiante.trim().length)
console.log(cad_delete)

let boolean_estudiante = (estudiante.includes("Eliezer"))
console.log(boolean_estudiante)