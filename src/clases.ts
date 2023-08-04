/**
 * CLASES
 * propiedades (variables)
 * metodos (funciones)
 */

class Personaje { // PascalCase - UpperCamelCase
  profesion?: string
  private static equipo: number = 0

  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number,
  ) {
  }

  subirNivel(): number {
    this.nivel = this.nivel + 1
    return this.nivel
  }

  static agregarPersonaje(): void {
    Personaje.equipo++ // this se aplica a las instancias y el nombre de la clase es para parametros de la propia clase
  }

  cambiarHP(cantidad: number): number {
    this._hp = this._hp + cantidad
    return this._hp
  }

  get hp(): number {
    return this._hp
  }
  
  static get getEquipo(): number {
    return Personaje.equipo
  }

  // set hp(cantidad:number) {
  //   this._hp = this._hp + cantidad
  // }
}

const personaje =  new Personaje(1, "Nicolas", 1, 100)
personaje.cambiarHP(-10)

const personaje1 = new Personaje(2, "Chanchito", 1, 120)

Personaje.agregarPersonaje()
console.log(Personaje.getEquipo)
