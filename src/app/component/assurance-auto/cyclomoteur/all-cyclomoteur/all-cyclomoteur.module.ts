import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {AllCyclomoteurComponent} from './all-cyclomoteur.component'
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
        FormsModule,
        CalendarModule,
        CheckboxModule,
        CascadeSelectModule,
        
    ],
    exports: [AllCyclomoteurComponent],
    providers: [],
    bootstrap: [AllCyclomoteurComponent]
  })

  
export class AllCylomoteurModule { }