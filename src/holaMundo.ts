let mensaje: string = "hola mundo"

mensaje = "chachito feliz"

mensaje = "chao mundo"

console.log(mensaje)

console.log(typeof [])

/**
 * tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any
 * unknown
 * never
 * array
 * tuples
 * enums
 * 
 * tipos inferidos
 */

let exttincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos = true

let miVariable // any
miVariable = "chanchito feliz"
miVariable = 42

function chanchitoFeliz(config: any) {
  return config
}

let animales: string[] = ["chanchito", "chanchitoFeliz", "felipe"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []

let nums2: Array<number> =[]

// nums.map((x) => x.) // el autocompletado sugiere métodos del tipo de dato.

let tuple: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]]
// tuple.push(12) // error no detectado por typescript.

const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

// PascalCase
enum Talla { // aqui se compila todo
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl"
}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error } // aqui solo se compila si se usa

const estado = LoadingState.Success

const objeto: {
  readonly id: number, // solo de lectura
  nombre?: string, // opcional
  talla: Talla
} = {
  id: 1,
  talla: Talla.Chica
}

objeto.nombre = "Hola mundo"

type Direccion = {
  numero: number,
  calle: string,
  pais: string
}

type Persona = {
  readonly id: number, // solo de lectura
  nombre?: string, // opcional
  talla: Talla,
  direccion: Direccion
}

const objetoType: Persona = {
  id: 1,
  talla: Talla.Chica,
  direccion: {
    numero: 1,
    calle: "Siempre Viva",
    pais: "Chanchitolandia"
  }
}

const arr: Persona[] = []

const fn: (a: number) => string = (edad: number) => {
  if (edad > 17)
    return "puedes ingresar"
  return "no puedes ingresar"
}

function validaEdad(edad: number, msg: string = "chanchito feliz"): string {
  if (edad > 17)
    return `puedes ingresar ${msg}`
  return "no puedes ingresar"
}

validaEdad(18)

function ErrorUsuario(): never { // distinto a void porque no ejecutan algo
  throw new Error("error de usuario")
}

let puntaje: number | string = 98 // union type

puntaje = "hola mundo"

type Animal = {
  id: number,
  estado: string
}

type Usuario = {
  id: number,
  name: string
}

let animal: Animal | Usuario = { id: 1, estado: "", name: "" }

function sumaDos(n: number | string): number {
  if (typeof n === "number") {
    return n + 2
  }
  return parseInt(n) + 2
}

sumaDos("2")

console.log("suma de dos mas dos", "2" + 2)
console.log(typeof ("2" + 2))

type Audit = {
  create_at: string,
  modified_at: string
}

type Product = {
  name: string
}

const product: Audit & Product = { //intersection type
  create_at: "",
  modified_at: "",
  name: ""
}

type Fibo = 0 | 1 | 2 | 3 | 5 // literal types

const nDeFibo: Fibo = 3

function toNumber(s: string | null |undefined) { // nullable types
  if (!s) {
    return 0
  }
  return parseInt(s)
}

const n = toNumber(undefined)

function getUser(id: number) { // optional chaining
  if (id < 0) {
    return null
  }
  return {
    id: 1,
    name: "Felipe",
    create_at: new Date()
  }
}

const user = getUser(-1)
console.log("usuario", user?.create_at)

if (user && user.create_at) {
  console.log("usuario", user?.create_at)
}

const arr1 = null
console.log(arr1?.[0])

const fn5: any = null
console.log(fn5?.())

const difficulty: number | null = 0 // nullish coalescing operator

const user2 = {
  username: "chanchito feliz",
  difficulty: difficulty ?? 1
}

console.log(user2)

const elem: any = null // type assertion

const elem1 = elem as number

const input = document.getElementById("username") as HTMLInputElement

const input2 = <HTMLInputElement> document.getElementById("username")

function lala(x: string | number) { // type narrowing
  if (typeof x === "number") {
    // x.
  }

  if (typeof x === "string") {
    // x.
  }
}

function procesa(algo: unknown) { //type unknown
  if (typeof algo === "string") {
    return algo.toUpperCase
  }

  if (typeof algo === "number") {
    return algo.toString
  }

  if (algo instanceof String) {
    return 
  }
  
  return

  // algo.haceCosas()
  // algo.otrasCosas()
  // algo.genkidama()
}
