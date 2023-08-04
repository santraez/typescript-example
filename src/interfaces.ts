interface Animales {
  name: string

  caminar(): void
  onomatopeya(): string
}

class Caballo implements Animales {
  name: string = "Rocinante"

  caminar(): void {
    console.log("caminando")
  }

  onomatopeya(): string {
    return "hin"
  }
}

class Cerdo implements Animales {
  name: string = "Chanchito feliz"

  caminar(): void {
    console.log("caminando")
  }

  onomatopeya(): string {
    return "oinc"
  }
}

class Perro implements Animales {
  name: string = "Fido"

  caminar(): void {
    console.log("caminando")
  }

  onomatopeya(): string {
    return "guau"
  }
}

class DiccionarioUsuarios { // index signature
  [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios["1a"] = "usuario 1"
diccionarioUsuarios["a1"] = "usuario 2"

console.log(diccionarioUsuarios)
