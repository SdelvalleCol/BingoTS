var _a, _b, _c;
import { data, game_start ,evaluar} from '../controlador/controlador.js';

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
window.evaluar = evaluar
