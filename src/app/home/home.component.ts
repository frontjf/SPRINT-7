import { Component } from '@angular/core';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  opcionesSeleccionadas: boolean[] = [false, false, false];
  presupuestoTotal: number = 0;
  numPaginas: number = 1;
  numIdiomas: number = 1;
  nombreUsuario: string = '';
  nombrePresupuesto: string = '';

  constructor(private presupuestoService: PresupuestoService) {}

  calcularPresupuesto(): void {
    this.presupuestoTotal = this.presupuestoService.calcularPresupuesto(
      this.opcionesSeleccionadas,
      this.numPaginas,
      this.numIdiomas
    );
  }

  actualizarNumPaginas(numPaginas: number): void {
    this.numPaginas = numPaginas;
    if (this.opcionesSeleccionadas[0]) {
      this.calcularPresupuesto();
    }
  }

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

  enviarPresupuesto() {
    const opcionesTexto = [];

    if (this.opcionesSeleccionadas[0]) {
      let textoWeb = 'Web';
      if (this.numPaginas > 1 || this.numIdiomas > 1) {
        textoWeb += ` (${this.numPaginas} página(s) adicional(es) ${this.numIdiomas} idioma(s))`;
      }
      opcionesTexto.push(textoWeb);
    }

    if (this.opcionesSeleccionadas[1]) {
      opcionesTexto.push('Hacer una campaña SEO');
    }

    if (this.opcionesSeleccionadas[2]) {
      opcionesTexto.push('Hacer una campaña de publicidad');
    }

    const presupuesto = {
      opcionesSeleccionadas: opcionesTexto,
      nombreUsuario: this.nombreUsuario,
      nombrePresupuesto: this.nombrePresupuesto,
      presupuestoTotal: this.presupuestoTotal
    };

    this.presupuestoService.agregarPresupuesto(presupuesto);

    this.nombreUsuario = '';
    this.nombrePresupuesto = '';
    this.presupuestoTotal = 0;

    // Reiniciar los valores de los checkboxes y los campos de páginas e idiomas seleccionados
    this.opcionesSeleccionadas = [false, false, false];
    this.numPaginas = 1;
    this.numIdiomas = 1;
  }
}




















// import { Component } from '@angular/core';
// import { PresupuestoService } from '../service/presupuesto.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   opcionesSeleccionadas: boolean[] = [false, false, false];   // Arreglo de opciones seleccionadas
//   presupuestoTotal: number = 0;                               // se almacena el presupuesto
//   numPaginas: number = 1;
//   numIdiomas: number = 1;
//   nombreUsuario: string = '';
//   nombrePresupuesto: string = '';

//   constructor(private presupuestoService: PresupuestoService) {}   
//    // Constructor del componente, inyecta el servicio PresupuestoService que esta en presupuesto.service.ts                                                                   

//   calcularPresupuesto(): void {         // Calcula el presupuesto total utilizando el servicio PresupuestoService
//     this.presupuestoTotal = this.presupuestoService.calcularPresupuesto(
//       this.opcionesSeleccionadas,
//       this.numPaginas,
//       this.numIdiomas
//     );
//   }
//  // actualiza las páginas y recalcula el presupuesto si la opcion de la web esta seleccionada
//  actualizarNumPaginas(numPaginas: number): void {   
//    this.numPaginas = numPaginas;
//    if (this.opcionesSeleccionadas[0]) {
//      this.calcularPresupuesto();
//    }
//  }

//  // actualiza los idiomas y recalcula el presupuesto si la opcion de la web está seleccionada
//  actualizarNumIdiomas(numIdiomas: number): void {
//    this.numIdiomas = numIdiomas;
//    if (this.opcionesSeleccionadas[0]) {
//      this.calcularPresupuesto();
//    }
//  }

//  actualizarOpcionesSeleccionadas(index: number, valor: boolean): void {
//    this.opcionesSeleccionadas[index] = valor;
//    this.calcularPresupuesto();
//  }

//  enviarPresupuesto() {
//   const opcionesTexto = [];

//   if (this.opcionesSeleccionadas[0]) {
//     const textoWeb = `Hacer una página web (${this.numPaginas} página(s) adicional(es))`;
//     opcionesTexto.push(textoWeb);
//   }

//   if (this.opcionesSeleccionadas[1]) {
//     opcionesTexto.push('Hacer una campaña SEO');
//   }

//   if (this.opcionesSeleccionadas[2]) {
//     opcionesTexto.push('Hacer una campaña de publicidad');
//   }

//   const presupuesto = {
//     opcionesSeleccionadas: opcionesTexto,
//     nombreUsuario: this.nombreUsuario,
//     nombrePresupuesto: this.nombrePresupuesto,
//     presupuestoTotal: this.presupuestoTotal
//   };

//   this.presupuestoService.agregarPresupuesto(presupuesto);

//   this.nombreUsuario = '';
//   this.nombrePresupuesto = '';
//   this.presupuestoTotal = 0;
// }




// }






