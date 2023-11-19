import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle-album',
  templateUrl: './detalle-album.page.html',
  styleUrls: ['./detalle-album.page.scss'],
})
export class DetalleAlbumPage implements OnInit {
  albumSeleccionado!: any;
  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.albumSeleccionado = this.dataService.albumsData.find((album)=>album.id===albumId)
  }

}
