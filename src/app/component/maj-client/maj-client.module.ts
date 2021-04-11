import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {MajClientComponent} from './maj-client.component'
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from "@angular/common";
import {FormsModule} from '@angular/forms';
const routes: Routes = [{

    path: '',
    data: {
          title: '',
          urls: [{title: '', url: ''}, {title: ''}]
      },
    component: MajClientComponent
  }];

@NgModule({
    declarations: [
      MajClientComponent
    ],
    imports: [
      CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        InputTextModule,
        FormsModule,
        
       
    ],
    exports: [MajClientComponent],
    providers: [],
    bootstrap: [MajClientComponent]
  })
  export class MajClientModule { }
  