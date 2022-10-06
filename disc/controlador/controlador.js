import { game } from "../modelo/modelo.js";
export var data;

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
export function game_start() {
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

export function evaluar(x) {
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