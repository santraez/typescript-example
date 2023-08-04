function log<T, V>(a: T, b: V): V {
  console.log(a, b)
  return b
}

// declarado
log<string, number>("dato", 42)
log<string, string>("dato", "chanchito feliz")

// inferido
log(1, 2)
log("saludo", "hola mundo")

// GENERICOS EN PROMESAS

async function fetchData<T>(recurso: string): Promise<T> {
  const respuesta = await fetch(`${recurso}`)
  return respuesta.json()
}

type User = {
  id: string,
  name: string
}

async function main() {
  const user = await fetchData<User>("/usuarios")
  // user.
}

// GENERICOS EN CLASES

type Computador = {
  encender: () => void,
  apagar: () => void
}

class Programador<A> {
  computador: A;
  constructor(a: A) {
    this.computador = a
  }
}

const programador = new Programador<Computador>({ encender: () => {}, apagar: () => {} })
programador.computador.apagar

const programador1 = new Programador<string>("hola mundo")
programador1.computador.charAt

// GENERICOS EN INTERFACES

interface KeyValue<A, B> {
  key: A,
  value: B
}

interface Products {
  id: string
}

function fetchProduct(): KeyValue<string, Products> {
  return {
    key: "id de producto",
    value: { id: "id de producto" }
  }
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "id de producto",
    value: 500
  }
}

// RESTRICCIONES EN GENERICOS

// interface Usuarios {
//   id: string
//   name: string
// }

class Usuarios {
  constructor(public id: string) {}
}

function print<A extends Usuarios>(a: A): A {
  console.log(a)
  return a
}

print({ id: "user_id", name: "Felipe" })

// GENERICOS Y HERENCIA

class Estado<A> {
  protected data: A[] = []

  agregar(a: A): void {
    this.data.push(a)
  }

  getEstado(): A[] {
    return this.data
  }
}

type ObjectId = {
  id: string
}

class EstadoEliminar<A extends ObjectId> extends Estado<A> { // pasar generico con restricciones
  eliminar(id: string) {
    this.data = this.data.filter(x => x.id !== id)
  }
}

class EstadoUsuarios extends Estado<Usuario> { // pasar generico fijo
  reiniciarContrasenas() {
    // aca logica
  }
}

const estadoUsuario = new EstadoUsuarios()

// OPERADOR KEYOF

type Calendar = {
  id: number
  fuente: string
  dueno: string
}

const calendar: Calendar = { id: 1, fuente: "Google", dueno: "yo" }

function getPro<A>(objeto: A, property: keyof A): unknown {
  return objeto[property]
}

getPro<Calendar>(calendar, "id")
getPro<Calendar>(calendar, "fuente")
// getPro<Calendar>(calendar, "propiedadQueNoExiste")

// UTILITY TYPES

type Punto = {
  x: number
  y: number
  desc?: string
}

type PuntoOpcional = Partial<Punto> // para volver opcional todo
type PuntoRequerido = Required<Punto> // para volver requerido todo

const keyVal: Record<string, number> = {
  "soy un string": 42
}

type kv = {  [key: string]: number } // esto es igual a lo de arriba

const p: Omit<Punto, "desc" | "y"> = { // omitir ciertos valores
  x: 1,
  // y: 2
}

const p1: Pick<Punto, "x" | "y"> = { // tomar solo cierto valores de un type
  x: 1,
  y: 2
}

const readOnly: Readonly<Punto> = { // para asignar valores de solo lectura
  x: 1,
  y: 3,
  desc: "soy una descripcion"
}

// readOnly.x = 42
