class game {
    data: Array<number> = []
    minimo: number
    maximo: number
    constructor(minimo: number, maximo: number) {
        this.minimo = minimo
        this.maximo = maximo
    }
    public get_minimo():number {
        return this.minimo
    }

    public get_maximo():number {
        return this.maximo
    }

    public get_data():Array<number> {
        return this.data
    }

    public isdata():boolean{
        if(this.data.length == 0 ){
            return true
        }else{
            return false
        }
    }
}

var data = new game(1, 100)

function generate_number() {
    for (var i = 0; i < 25; i++) {
        var numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) +data.get_minimo())
        while (data.get_data().includes(numero_mon) == true) {
            numero_mon = Math.floor(Math.random() * (data.get_maximo() - data.get_minimo() + 1) +data.get_minimo())
        }
        data.get_data().push(numero_mon)
    }
}

function game_start() {
    var plantilla = document.getElementById("contenedor") as HTMLDivElement
    generate_number()
    for (var i = 0; i < data.get_data().length; i++) {
        plantilla.innerHTML += `<div id="${data.get_data()[i]}"  class="col-2 numero" onclick="evaluar(${data.get_data()[i]})">
        <p class="numero_contenido">
            ${data.get_data()[i]}
        </p>
    </div>`
    }
}

function evaluar(x: string):void {
    var plantilla = document.getElementById(x) as HTMLDivElement
    if (plantilla.style.backgroundColor == "black") {
        plantilla.style.backgroundColor = "white"
        data.get_data().push(parseInt(x))
    } else {
        plantilla.style.backgroundColor = "black"
        data.get_data().splice(parseInt(x))
    }
    console.log(data.get_data())

}

game_start()



