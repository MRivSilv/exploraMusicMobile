// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Cambia 'home' a 'login'
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [HomeGuard], // Protege la ruta de inicio con el guardia de autenticación
  },
  {
    path: 'detalle-album/:id',
    loadChildren: () => import('./detalle-album/detalle-album/detalle-album.module').then(m => m.DetalleAlbumPageModule),
    canActivate: [HomeGuard], // Protege la ruta de detalle-album con el guardia de autenticación
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule),
    canActivate: [HomeGuard], // Protege la ruta de búsqueda con el guardia de autenticación
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
  },
  // Agrega otras rutas según sea necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
