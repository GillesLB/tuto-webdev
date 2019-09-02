import { Injectable } from '@angular/core';

import { Dev } from 'src/app/dev.modele';

@Injectable({
  providedIn: 'root'
})
export class WebdevService {

  listeDevs: Dev[] = [
    {id: 1, nom: 'AAA', role: 'aaa', obligatoire: true},
    {id: 2, nom: 'BBB', role: 'bbb', obligatoire: false},
    {id: 3, nom: 'CCC', role: 'ccc', obligatoire: true},
    {id: 4, nom: 'DDD', role: 'ddd', obligatoire: true},
    {id: 5, nom: 'EEE', role: 'eee', obligatoire: false},
    {id: 6, nom: 'AAA', role: 'aaa', obligatoire: true},
    {id: 7, nom: 'BBB', role: 'bbb', obligatoire: false},
    {id: 8, nom: 'CCC', role: 'ccc', obligatoire: true},
    {id: 9, nom: 'DDD', role: 'ddd', obligatoire: true},
    {id: 10, nom: 'EEE', role: 'eee', obligatoire: false}
  ];

  constructor() { }

  supprimer(dev) {
    const devASupprimer = this.listeDevs.findIndex(
      (devIndex) => {
        if (devIndex === dev) {
          return true;
        }
      }
    );
    this.listeDevs.splice(devASupprimer, 1);
  }
}
