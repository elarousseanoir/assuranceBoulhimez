import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { CyclomoteurComponent} from './cyclomoteur.component';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';

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
        CyclomoteurComponent,
       
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
    exports: [CyclomoteurComponent],
    providers: [],
    bootstrap: [CyclomoteurComponent]
  })

  
export class CylomoteurModule { }