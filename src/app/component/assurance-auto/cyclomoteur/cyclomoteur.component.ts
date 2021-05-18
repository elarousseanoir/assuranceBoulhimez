import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cyclomoteur',
  templateUrl: './cyclomoteur.component.html',
  styleUrls: ['./cyclomoteur.component.css']
})
export class CyclomoteurComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
  }
}
