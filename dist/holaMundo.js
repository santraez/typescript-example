"use strict";
let mensaje = "hola mundo";
mensaje = "chachito feliz";
mensaje = "chao mundo";
console.log(mensaje);
console.log(typeof []);
let exttincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let miVariable;
miVariable = "chanchito feliz";
miVariable = 42;
function chanchitoFeliz(config) {
    return config;
}
let animales = ["chanchito", "chanchitoFeliz", "felipe"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tuple = [1, ["chanchito feliz", "chanchito felipe"]];
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    talla: Talla.Chica
};
objeto.nombre = "Hola mundo";
const objetoType = {
    id: 1,
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: "Siempre Viva",
        pais: "Chanchitolandia"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return "puedes ingresar";
    return "no puedes ingresar";
};
function validaEdad(edad, msg = "chanchito feliz") {
    if (edad > 17)
        return `puedes ingresar ${msg}`;
    return "no puedes ingresar";
}
validaEdad(18);
function ErrorUsuario() {
    throw new Error("error de usuario");
}
let puntaje = 98;
puntaje = "hola mundo";
let animal = { id: 1, estado: "", name: "" };
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos("2");
console.log("suma de dos mas dos", "2" + 2);
console.log(typeof ("2" + 2));
const product = {
    create_at: "",
    modified_at: "",
    name: ""
};
const nDeFibo = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: "Felipe",
        create_at: new Date()
    };
}
const user = getUser(-1);
console.log("usuario", user === null || user === void 0 ? void 0 : user.create_at);
if (user && user.create_at) {
    console.log("usuario", user === null || user === void 0 ? void 0 : user.create_at);
}
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const difficulty = 0;
const user2 = {
    username: "chanchito feliz",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
console.log(user2);
const elem = null;
const elem1 = elem;
const input = document.getElementById("username");
const input2 = document.getElementById("username");
function lala(x) {
    if (typeof x === "number") {
    }
    if (typeof x === "string") {
    }
}
function procesa(algo) {
    if (typeof algo === "string") {
        return algo.toUpperCase;
    }
    if (typeof algo === "number") {
        return algo.toString;
    }
    if (algo instanceof String) {
        return;
    }
    return;
}
//# sourceMappingURL=holaMundo.js.map