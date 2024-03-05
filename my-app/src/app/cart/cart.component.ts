import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { Router } from '@angular/router';
import { ConfirmationService } from '../confirmation.service';
import { Producto } from '../model/Producto';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  product:Producto[]=[];
  total:number=0;
  fullname: string;
  address: string;
  creditcard:number;
  constructor(private confService:ConfirmationService,private cartService:CartlistService,private router: Router) { }

  ngOnInit(): void {
    this.product=this.cartService.getCart();
    for (let i = 0; i < this.product.length; i++) {
      this.total=this.total+this.product[i].price*this.product[i].counter;
    }
  }
  onInputChange(producto) {
    this.total=0;

      if(producto.counter==0){
        alert(producto.name+" removed")
        this.cartService.removeToCart(producto);
        this.product=this.cartService.getCart();
      }
      for (let i = 0; i < this.product.length; i++) {
      this.total=this.total+this.product[i].price*this.product[i].counter;
    }
  }

  onSubmit(): void {
    if(this.total!=0){
    this.confService.configure(this.fullname,this.total);
    this.cartService.clearCart();
    this.router.navigate(['/conf']);
    }
    else{alert('Empty cart!');}
  }

}
