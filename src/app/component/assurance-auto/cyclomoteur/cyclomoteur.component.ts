import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyclomoteur',
  templateUrl: './cyclomoteur.component.html',
  styleUrls: ['./cyclomoteur.component.css']
})
export class CyclomoteurComponent implements OnInit {
  value: Date;
  products: any[];

    customers: any[];
    resizableColumns:boolean=true;
    scrollable:boolean=true;
    valueC:any[];

  constructor() { }

  ngOnInit(): void {
  }
 

}
