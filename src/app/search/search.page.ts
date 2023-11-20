// search.page.ts
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchTerm: string = '';
  resultados: any[] = [];

  constructor(private dataService: DataService) {}

  buscarAlbumes() {
    // Lógica de búsqueda en la base de datos
    if (this.searchTerm.trim() !== '') {
      this.resultados = this.dataService.buscarAlbumesPorPalabra(this.searchTerm);
    } else {
      this.resultados = []; // Limpiar resultados si la búsqueda está vacía
    }
  }
}
