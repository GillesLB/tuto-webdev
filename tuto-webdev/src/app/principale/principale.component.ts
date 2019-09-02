import { Component, OnInit } from '@angular/core';

import { WebdevService } from 'src/app/webdev.service';
import { Dev } from 'src/app/dev.modele';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {

  p: number = 1;

  devs: Dev[] = [];

  constructor(
    private webdevService: WebdevService,
  ) { }

  ngOnInit() {
    this.devs = this.webdevService.listeDevs;
  }

  onSupprimer(dev) {
    this.webdevService.supprimer(dev);
  }

}
