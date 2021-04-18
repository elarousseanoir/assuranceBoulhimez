import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AllCyclomoteurComponent} from "./all-cyclomoteur.component";


const routes: Routes = [{

    path: '',
    data: {
          title: '',
          urls: [{title: '', url: ''}, {title: ''}]
      },
    component: AllCyclomoteurComponent
  }];


  @NgModule({
    declarations: [
        AllCyclomoteurComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CardModule,
        InputTextModule,
        FormsModule
    ],
    exports: [AllCyclomoteurComponent],
    providers: [],
    bootstrap: [AllCyclomoteurComponent]
  })
  export class AllCyclomoteurModule { }