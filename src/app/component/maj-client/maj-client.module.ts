import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {MajClientComponent} from './maj-client.component'
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
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
        RouterModule.forChild(routes),
        CardModule,
        InputTextModule,
        FormsModule
    ],
    exports: [MajClientComponent],
    providers: [],
    bootstrap: [MajClientComponent]
  })
  export class MajClientModule { }
  