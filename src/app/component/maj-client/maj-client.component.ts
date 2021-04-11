import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientModel} from '../../models/ClientModel'
@Component({
  selector: 'app-maj-client',
  templateUrl: './maj-client.component.html',
  styleUrls: ['./maj-client.component.css']
})
export class MajClientComponent implements OnInit {

  client:ClientModel={};
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    console.log('ajouter client',form.value['codeClient'])
    this.client.code = form.value['codeClient'];
  }
}
