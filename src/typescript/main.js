"use strict";
class game {
    constructor(minimo, maximo) {
        this.data = [];
        this.minimo = minimo;
        this.maximo = maximo;
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
}
var data = new game(1, 100);
function generate_number() {
    for (var i = 0; i < 25; i++) {
        var numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) + data.get_minimo());
        while (data.get_data().includes(numero_mon) == true) {
            numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) + data.get_minimo());
        }
        data.get_data().push(numero_mon);
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
        data.get_data().push(parseInt(x));
    }
    else {
        plantilla.style.backgroundColor = "black";
        data.get_data().splice(parseInt(x));
    }
    console.log(data.get_data());
}
game_start();
