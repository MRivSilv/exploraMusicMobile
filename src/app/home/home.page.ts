// home.page.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
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
  cambiarOrden(event: any) {
    const criterio = event.detail.value;
    switch (criterio) {
      case 'valoracionDesc':
        this.dataService.albumsData.sort((a, b) => b.valoracion - a.valoracion);
        break;
      case 'valoracionAsc':
        this.dataService.albumsData.sort((a, b) => a.valoracion - b.valoracion);
        break;
      case 'alfabeticamente':
        this.dataService.albumsData.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      default:
        break;
    }
  }
}
