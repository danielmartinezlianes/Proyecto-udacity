export class Producto {
    id: number | null;
    name: string;
    price: number;
    url: string;
    description: string;
    counter: number;
  
    constructor() {
      this.id = null;
      this.name = "";
      this.price = null;
      this.url = "";
      this.description = "";
      this.counter = 1;
    }
  }