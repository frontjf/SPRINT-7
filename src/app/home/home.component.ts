import { Component } from '@angular/core';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  opcionesSeleccionadas: boolean[] = [false, false, false];   // Arreglo de opciones seleccionadas
  presupuestoTotal: number = 0;                               // se almacena el presupuesto
  numPaginas: number = 1;
  numIdiomas: number = 1;

  constructor(private presupuestoService: PresupuestoService) {}   
   // Constructor del componente, inyecta el servicio PresupuestoService que esta en presupuesto.service.ts                                                                   

  calcularPresupuesto(): void {         // Calcula el presupuesto total utilizando el servicio PresupuestoService
    this.presupuestoTotal = this.presupuestoService.calcularPresupuesto(
      this.opcionesSeleccionadas,
      this.numPaginas,
      this.numIdiomas
    );
  }
 // actualiza las páginas y recalcula el presupuesto si la opcion de la web esta seleccionada
 actualizarNumPaginas(numPaginas: number): void {   
   this.numPaginas = numPaginas;
   if (this.opcionesSeleccionadas[0]) {
     this.calcularPresupuesto();
   }
 }

 // actualiza los idiomas y recalcula el presupuesto si la opcion de la web está seleccionada
 actualizarNumIdiomas(numIdiomas: number): void {
   this.numIdiomas = numIdiomas;
   if (this.opcionesSeleccionadas[0]) {
     this.calcularPresupuesto();
   }
 }

 actualizarOpcionesSeleccionadas(index: number, valor: boolean): void {
   this.opcionesSeleccionadas[index] = valor;
   this.calcularPresupuesto();
 }


  
  


}





