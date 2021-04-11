import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClientModel} from '../../models/ClientModel'

import * as $ from 'jquery';
@Component({
  selector: 'app-maj-client',
  templateUrl: './maj-client.component.html',
  styleUrls: ['./maj-client.component.css']
})
export class MajClientComponent implements OnInit {

  situationSelected:string;
  situationsFamiliales:string[]=[
    "C","M","D","V"
  ];
  client:ClientModel={};
  constructor() { }

  ngOnInit(): void {
  
  }
  changesituation(event){

  }
  
  onSubmit(form: NgForm) {
    var sexe = $('#sexe input:radio:checked').val()
    this.situationSelected = $("#situationFamiliale").val() 
    this.client.code = form.value['code'];
    this.client.nom = form.value['nom'];
    this.client.prenom = form.value['prenom'];
    this.client.dateNaissance = form.value['dateNaissance'];
    this.client.adresse = form.value['adresse'];
    this.client.ville = form.value['ville'];
    this.client.sexe = sexe;
    this.client.situationFamiliale =  this.situationSelected;
    this.client.nombreEnfant = form.value['nombreEnfant'];
    this.client.numeroTelephone = form.value['numeroTelephone'];
    this.client.numeroPermis = form.value['numeroPermis'];
    this.client.datePermis = form.value['datePermis'];
    this.client.lieuPermis = form.value['lieuPermis'];
   
    console.log('ajouter client', this.client)

  }
}
