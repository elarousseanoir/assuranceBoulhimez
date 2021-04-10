import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MenuItem[];
  title = 'assuranceboulhimez';
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
      this.items = [
        {
            label: 'Clients',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Assurance Auto',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Attestations Définitives', icon: 'pi pi-fw pi-trash'},
                {label: 'Gestion des Recettes par Journée', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
          label: 'Gestion des Réglements Auto',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Tarification des Avenants', icon: 'pi pi-fw pi-trash'},
              {label: 'Risques Divers', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Correspondances',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Editions', icon: 'pi pi-fw pi-trash'},
            {label: 'Transfert des Données de Essadaa à AL-Majd', icon: 'pi pi-fw pi-refresh'}
        ]
    }
    ];
}

}
