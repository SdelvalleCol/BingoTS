import {data,game_start} from './controlador'

function evaluar(x: string): void {
    var plantilla = document.getElementById(x) as HTMLDivElement;
    if (plantilla.style.backgroundColor == "black") {
      plantilla.style.backgroundColor = "white";
      plantilla.style.color = "black";
      data.set_tamano(data.get_tamano() + 1);
    } else {
      plantilla.style.backgroundColor = "black";
      plantilla.style.color = "white";
      data.set_tamano(data.get_tamano() - 1);
    }
    console.log(data.get_tamano());
  }
  
  document.getElementById("ver_a")?.addEventListener("click", (e) => {
    var plantilla = document.getElementById("id01") as HTMLDivElement;
    if (data.get_tamano() == 0) {
      plantilla.style.display = "block";
      var plantilla_med = document.getElementById("x_a") as HTMLParagraphElement;
      plantilla_med.innerHTML = "Ganaste";
    } else {
      plantilla.style.display = "block";
      var plantilla_med = document.getElementById("x_a") as HTMLParagraphElement;
      plantilla_med.innerHTML = "Perdiste";
    }
  });
  
  document.getElementById("ver_a_b")?.addEventListener("click", (e) => {
    var plantilla_main = document.getElementById("otro_numero") as HTMLDivElement;
    if (plantilla_main.style.backgroundColor != "orange") {
      plantilla_main.style.backgroundColor = "orange";
    }
    var plantilla = document.getElementById(
      "carta_principal"
    ) as HTMLParagraphElement;
    var random = Math.floor(
      Math.random() * (data.get_maximo() - data.get_minimo() + 1) +
        data.get_minimo()
    );
    var sub_plantilla = plantilla.innerHTML;
    plantilla.innerHTML = `<p id="numero_carta_principal" class="numero_carta_principal">${random}</p>`;
    if (sub_plantilla != "") {
      var xd = document.getElementById("carta_secundaria_row") as HTMLDivElement;
      xd.innerHTML += `<div class="col-4">
          <p class="contenedor_carta_secundaria">
              ${sub_plantilla}
          </p>
      </div>`;
    }
  });
  
  document.getElementById("ver_a_b_c")?.addEventListener(("click"),(e)=>{
      data.reset()
      var plantilla = document.getElementById("contenedor") as HTMLDivElement;
      plantilla.innerHTML = ""
      var plantilla_main = document.getElementById("otro_numero") as HTMLDivElement;
      plantilla_main.style.background = "white"
      var plantilla_primaria_carta = document.getElementById("carta_principal") as HTMLDivElement
      plantilla_primaria_carta.innerHTML =""
      var plantilla_secundaria_carta = document.getElementById("carta_secundaria_row") as HTMLDivElement
      plantilla_secundaria_carta.innerHTML = ""
      game_start()
  })
  
  game_start();
  