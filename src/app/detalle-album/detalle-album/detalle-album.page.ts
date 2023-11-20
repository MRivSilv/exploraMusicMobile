// detalle-album.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.page.html',
  styleUrls: ['./detalle-album.page.scss'],
})
export class DetalleAlbumPage implements OnInit {
  albumDetalles: any = {};
https: any;

  constructor(public dataService: DataService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    await this.dataService.obtenerDetallesAlbum(albumId!);
    this.albumDetalles = this.dataService.albumSeleccionado;
  }
}

