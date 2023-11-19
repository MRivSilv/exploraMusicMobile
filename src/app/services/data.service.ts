// data.service.ts

import { Injectable } from '@angular/core';
import { supabase } from 'src/supabase-config';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  albumsData: any[] = [];
  albumSeleccionado: any = null; // Nuevo atributo para almacenar el álbum seleccionado

  constructor() {}

  async obtenerDatos() {
    try {
      const { data, error } = await supabase.from('albumes').select('*');

      if (error) {
        console.error('Error al recuperar datos:', error.message);
      } else {
        this.albumsData = data;
      }
    } catch (error) {
      console.error('Error inesperado:', (error as any).message);
    }
  }

  seleccionarAlbum(album: any) {
    this.albumSeleccionado = album;
  }
}

