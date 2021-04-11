import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [{
  path: '',
  children: [
    //MAJ CLIENT
     {
      path: 'miseajourClient',
      loadChildren: () => import('./component/maj-client/maj-client.module').then(m => m.MajClientModule),
    },
]
},
];

