import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { CartlistService } from '../cartlist.service';
import { Producto } from '../model/Producto';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  Products: Producto[] = [];
  cart:Producto[]=[];
  producto='no';
  counter=1;
  añadir=true;
  constructor(private httpService: HttpService,private cartService:CartlistService) { 
  
  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data: Producto[]) => {
    this.Products = data;
    for (let i = 0; i < this.Products.length; i++) {
      const product = this.Products[i];
      product.counter = 1;
    }
    
  }); 
}

show(product){
  this.producto=product;
}
addtocart(product):void{
  this.cart=this.cartService.getCart();
  this.añadir=true;
  
  for (let i = 0; i < this.cart.length; i++) {
    console.log();
      if(this.cart[i].id==product.id){
        this.añadir=false;
        alert('producto already in the list');
        return;
      }
  }
 
  product.counter= (document.getElementById(product.id) as HTMLInputElement).value;
  this.cartService.addToCart(product);
  alert(product.counter+' '+product.name+' added to cart')
}

}
