"use strict";
var _a, _b, _c;
class game {
    constructor(minimo, maximo) {
        this.data = [];
        this.tamano = 0;
        this.minimo = minimo;
        this.maximo = maximo;
    }
    set_tamano(tamano) {
        this.tamano = tamano;
    }
    get_tamano() {
        return this.tamano;
    }
    get_minimo() {
        return this.minimo;
    }
    get_maximo() {
        return this.maximo;
    }
    get_data() {
        return this.data;
    }
    isdata() {
        if (this.data.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    reset() {
        this.data = [];
        this.tamano = 0;
    }
}
var data;
function generate_number() {
    data = new game(1, 100);
    for (var i = 0; i < 25; i++) {
        var numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
            data.get_minimo());
        while (data.get_data().includes(numero_mon) == true) {
            numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
                data.get_minimo());
        }
        data.get_data().push(numero_mon);
        data.set_tamano(data.get_data().length);
    }
}
function game_start() {
    var plantilla = document.getElementById("contenedor");
    generate_number();
    for (var i = 0; i < data.get_data().length; i++) {
        plantilla.innerHTML += `<div id="${data.get_data()[i]}"  class="col-2 numero" onclick="evaluar(${data.get_data()[i]})">
        <p class="numero_contenido">
            ${data.get_data()[i]}
        </p>
    </div>`;
    }
}
function evaluar(x) {
    var plantilla = document.getElementById(x);
    if (plantilla.style.backgroundColor == "black") {
        plantilla.style.backgroundColor = "white";
        plantilla.style.color = "black";
        data.set_tamano(data.get_tamano() + 1);
    }
    else {
        plantilla.style.backgroundColor = "black";
        plantilla.style.color = "white";
        data.set_tamano(data.get_tamano() - 1);
    }
    console.log(data.get_tamano());
}
(_a = document.getElementById("ver_a")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    var plantilla = document.getElementById("id01");
    if (data.get_tamano() == 0) {
        plantilla.style.display = "block";
        var plantilla_med = document.getElementById("x_a");
        plantilla_med.innerHTML = "Ganaste";
    }
    else {
        plantilla.style.display = "block";
        var plantilla_med = document.getElementById("x_a");
        plantilla_med.innerHTML = "Perdiste";
    }
});
(_b = document.getElementById("ver_a_b")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (e) => {
    var plantilla_main = document.getElementById("otro_numero");
    if (plantilla_main.style.backgroundColor != "orange") {
        plantilla_main.style.backgroundColor = "orange";
    }
    var plantilla = document.getElementById("carta_principal");
    var random = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
        data.get_minimo());
    var sub_plantilla = plantilla.innerHTML;
    plantilla.innerHTML = `<p id="numero_carta_principal" class="numero_carta_principal">${random}</p>`;
    if (sub_plantilla != "") {
        var xd = document.getElementById("carta_secundaria_row");
        xd.innerHTML += `<div class="col-4">
        <p class="contenedor_carta_secundaria">
            ${sub_plantilla}
        </p>
    </div>`;
    }
});
(_c = document.getElementById("ver_a_b_c")) === null || _c === void 0 ? void 0 : _c.addEventListener(("click"), (e) => {
    data.reset();
    var plantilla = document.getElementById("contenedor");
    plantilla.innerHTML = "";
    var plantilla_main = document.getElementById("otro_numero");
    plantilla_main.style.background = "white";
    var plantilla_primaria_carta = document.getElementById("carta_principal");
    plantilla_primaria_carta.innerHTML = "";
    var plantilla_secundaria_carta = document.getElementById("carta_secundaria_row");
    plantilla_secundaria_carta.innerHTML = "";
    game_start();
});
game_start();
