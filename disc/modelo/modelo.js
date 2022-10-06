export class game {
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
