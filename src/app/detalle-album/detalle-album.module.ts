import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlbumPageRoutingModule } from './detalle-album-routing.module';

import { DetalleAlbumPage } from './detalle-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlbumPageRoutingModule
  ],
  declarations: [DetalleAlbumPage]
})
export class DetalleAlbumPageModule {}
