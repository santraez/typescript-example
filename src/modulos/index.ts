// import Group, { defaultGroups } from "./Group"
import * as G from "./Group" // wildcard import 
import { Point, PUNTITO } from "./Point"
import { Animales, Chanchitos, Caballos } from "./Animales"

console.log(Animales, Chanchitos, Caballos)

const point = new Point(1, 2)

const group = new G.default(1, "chanchito feliz") // export por defecto

console.log(PUNTITO)
console.log(G.defaultGroups.admin) // named export
