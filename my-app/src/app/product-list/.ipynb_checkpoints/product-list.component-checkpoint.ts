import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products: any[] = [];
  constructor(private httpService: HttpService) { 
  
  }

  ngOnInit(): void {
      this.httpService.getProducts().subscribe((data: any[]) => {
      this.Products = data;
    });
      console.log(this.Products);
  }

}
