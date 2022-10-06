export class game {
    data: Array<number> = [];
    minimo: number;
    maximo: number;
    tamano: number = 0;
  
    constructor(minimo: number, maximo: number) {
      this.minimo = minimo;
      this.maximo = maximo;
    }
    public set_tamano(tamano: number): void {
      this.tamano = tamano;
    }
  
    public get_tamano(): number {
      return this.tamano;
    }
  
    public get_minimo(): number {
      return this.minimo;
    }
  
    public get_maximo(): number {
      return this.maximo;
    }
  
    public get_data(): Array<number> {
      return this.data;
    }
  
    public isdata(): boolean {
      if (this.data.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  
    public reset():void{
      this.data = []
      this.tamano = 0
    }
  }