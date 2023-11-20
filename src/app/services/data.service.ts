import { Injectable } from '@angular/core';
import { supabase } from 'src/supabase-config';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  albumsData: any[] = [];
  albumSeleccionado: any = null; 

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

  async obtenerDetallesAlbum(albumId: string) {
    try {
      const { data, error } = await supabase
        .from('albumes')
        .select('*')
        .eq('id', albumId)
        .single();

      if (error) {
        console.error('Error al recuperar detalles del álbum:', error.message);
      } else {
        this.albumSeleccionado = data;
        console.log(this.albumSeleccionado);
      }
    } catch (error) {
      console.error('Error inesperado:', (error as any).message);
    }
  }
  buscarAlbumesPorPalabra(palabra: string) {
    const resultados = this.albumsData.filter(album =>
      this.coincidePalabraClave(album, palabra)
    );

    return resultados;
  }
  private coincidePalabraClave(album: any, palabra: string) {
    const keywordLower = palabra.toLowerCase();

    return (
      album.nombre.toLowerCase().includes(keywordLower) ||
      album.descripcion.toLowerCase().includes(keywordLower) ||
      album.genero.toLowerCase().includes(keywordLower)
      
    );
  }
}



