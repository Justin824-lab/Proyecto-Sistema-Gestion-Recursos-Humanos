import { Component,OnInit  } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
 

  menuItems = [
    { title: 'Empleados', path: '/empleados', icon: 'bi bi-people-fill' },
    { title: 'Etnia', path: '/etnia', icon: 'bi bi-people-fill' },
    { title: 'Nivel de Utilización', path: '/nivel-de-utilizacion', icon: 'bi bi-bar-chart-line-fill' },
    { title: 'Otros Pagos', path: '/otros-pagos', icon: 'bi bi-cash-stack' },
    { title: 'No Resolución', path: '/no-resolucion', icon: 'bi bi-file-earmark-excel-fill' },
    { title: 'Cat. Ocupacional', path: '/cat-ocupacional', icon: 'bi bi-briefcase-fill' },
    { title: 'CFT Principales', path: '/cft-principales', icon: 'bi bi-building' },
    { title: 'Contrato', path: '/contrato', icon: 'bi bi-file-earmark-text-fill' },
    { title: 'Color de Pelo', path: '/color-pelo', icon: 'bi bi-palette-fill' },
    { title: 'Ubicación', path: '/ubicacion', icon: 'bi bi-geo-alt-fill' },
    { title: 'Estado', path: '/estado', icon: 'bi bi-check-circle-fill' },
    { title: 'Departamento', path: '/departamento', icon: 'bi bi-diagram-3-fill' },
    { title: 'Requisitos Conocimientos', path: '/req-conocimientos', icon: 'bi bi-journal-bookmark-fill' },
    { title: 'Grupo Escala', path: '/grupo-escala', icon: 'bi bi-layers-fill' },
    { title: 'Trabaja en', path: '/trabaja-en', icon: 'bi bi-briefcase' },
    { title: 'Plantilla', path: '/plantilla', icon: 'bi bi-file-earmark-spreadsheet-fill' },
    { title: 'Cargo Requisitos', path: '/cargo-requisitos', icon: 'bi bi-card-checklist' },
    { title: 'Cargo Nivel Utilización', path: '/cargo-nivel-utilizacion', icon: 'bi bi-graph-up' },
    { title: 'Otros Pagos Empleados', path: '/otros-pagos-empleados', icon: 'bi bi-wallet2' },
    { title: 'Trabajo Laboral', path: '/tlaboral', icon: 'bi bi-hammer' },
    { title: 'Cargo Funciones', path: '/cargo-funciones', icon: 'bi bi-list-task' }
  ];
  // Propiedad para los items filtrados (se muestra en la vista)
  filteredItems = this.menuItems;
  
  // Items destacados (puedes personalizar esta lista)
  featuredItems = ['Empleados', 'Departamento', 'Plantilla'];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }
   // Método para filtrar los items del menú
   filterItems(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    
    if (!searchTerm) {
      this.filteredItems = this.menuItems;
      return;
    }
    
    this.filteredItems = this.menuItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm)
    );
  }
  
}



