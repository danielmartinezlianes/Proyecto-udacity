import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../confirmation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  confirmacion:any[]=[];
  name:string;
  total:number;
  constructor(private confService:ConfirmationService,private router: Router) { }

  ngOnInit(): void {
    this.confirmacion=this.confService.getconf();
    this.name=this.confirmacion[0].name;
    this.total=this.confirmacion[0].total;
  }

  newBuy(){
    this.confService.clear();
    this.router.navigate(['/']);
  }
}
