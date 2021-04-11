import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CyclomoteurComponent } from "./cyclomoteur.component";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{

    path: '',
    data: {
          title: '',
          urls: [{title: '', url: ''}, {title: ''}]
      },
    component: CyclomoteurComponent
  }];


  @NgModule({
    declarations: [
      CyclomoteurComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CardModule,
        InputTextModule,
        FormsModule
    ],
    exports: [CyclomoteurComponent],
    providers: [],
    bootstrap: [CyclomoteurComponent]
  })
  export class CyclomoteurModule { }