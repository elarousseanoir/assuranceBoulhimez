import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './layouts/navigation/navigation.component';


export const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [
  
    //MAJ CLIENT
     {
      path: 'miseajourClient',
      loadChildren: () => import('./component/maj-client/maj-client.module').then(m => m.MajClientModule),
    },
]
},
];

