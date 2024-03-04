import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  confirmacion:any[]=[]
  constructor() { }
  getconf(){
    return this.confirmacion;
  }
  configure(name,total) {
    const conf ={
      name:name,
      total:total
    }
    this.confirmacion.push(conf);
    return this.confirmacion;
  }
  clear(){
    this.confirmacion = [];
    return this.confirmacion;
  }
}
