import { game } from "./modelo";

export var data: game;

function generate_number() {
  data = new game(1, 100);
  for (var i = 0; i < 25; i++) {
    var numero_mon = Math.floor(
      Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
        data.get_minimo()
    );
    while (data.get_data().includes(numero_mon) == true) {
      numero_mon = Math.floor(
        Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
          data.get_minimo()
      );
    }
    data.get_data().push(numero_mon);
    data.set_tamano(data.get_data().length);
  }
}

export function game_start() {
  var plantilla = document.getElementById("contenedor") as HTMLDivElement;
  generate_number();
  for (var i = 0; i < data.get_data().length; i++) {
    plantilla.innerHTML += `<div id="${
      data.get_data()[i]
    }"  class="col-2 numero" onclick="evaluar(${data.get_data()[i]})">
        <p class="numero_contenido">
            ${data.get_data()[i]}
        </p>
    </div>`;
  }
}
