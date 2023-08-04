"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
    return b;
}
log("dato", 42);
log("dato", "chanchito feliz");
log(1, 2);
log("saludo", "hola mundo");
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData("/usuarios");
    });
}
class Programador {
    constructor(a) {
        this.computador = a;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
programador.computador.apagar;
const programador1 = new Programador("hola mundo");
programador1.computador.charAt;
function fetchProduct() {
    return {
        key: "id de producto",
        value: { id: "id de producto" }
    };
}
function fetchStock() {
    return {
        key: "id de producto",
        value: 500
    };
}
class Usuarios {
    constructor(id) {
        this.id = id;
    }
}
function print(a) {
    console.log(a);
    return a;
}
print({ id: "user_id", name: "Felipe" });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(a) {
        this.data.push(a);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const estadoUsuario = new EstadoUsuarios();
const calendar = { id: 1, fuente: "Google", dueno: "yo" };
function getPro(objeto, property) {
    return objeto[property];
}
getPro(calendar, "id");
getPro(calendar, "fuente");
const keyVal = {
    "soy un string": 42
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2
};
const readOnly = {
    x: 1,
    y: 3,
    desc: "soy una descripcion"
};
//# sourceMappingURL=genericos.js.map