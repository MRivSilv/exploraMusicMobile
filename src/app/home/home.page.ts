// home.page.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public dataService: DataService, private router:Router) {}

  ngOnInit() {
    this.dataService.obtenerDatos();
  }

  // Nuevo método para manejar el clic en un álbum
  onAlbumClick(album: any) {
    this.router.navigate(['/detalle-album', album.id]);
  }
  
}
