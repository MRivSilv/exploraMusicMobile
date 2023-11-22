import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAlbumPage } from './detalle-album.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAlbumPageRoutingModule {}
