import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [{
  path: '',
  children: [
    //MAJ CLIENT
     {
      path: 'miseajourClient',
      loadChildren: () => import('./component/maj-client/maj-client.module').then(m => m.MajClientModule),
    },

    // Cyclomoteur
    {
      path: 'cyclomoteur',
      loadChildren: () => import('./component/assurance-auto/cyclomoteur/cyclomoteur.module').then(m => m.CyclomoteurModule),
    },
    //All cyclomoteur
    {
      path: 'allCyclomoteur',
      loadChildren: () => import('./component/assurance-auto/cyclomoteur/all-cyclomoteur/all-cyclomoteur.module')
      .then(m => m.AllCyclomoteurModule),
    }
]
},
];

