import { Injectable } from '@angular/core';

interface Presupuesto {
  opcionesSeleccionadas: string[];
  nombreUsuario: string;
  nombrePresupuesto: string;
  presupuestoTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuestos: Presupuesto[] = [];
  todoPresupuesto: string [] =[];

  calcularPresupuesto(opcionesSeleccionadas: boolean[], numPaginas: number, numIdiomas: number): number {
    let costeWeb: number = 470;
    let costeSeo: number = 300;
    let costePubli: number = 200;
    let presupuestoTotal = 0;

    if (opcionesSeleccionadas[0]) { // Si se selecciona la opción de hacer una página web
      presupuestoTotal += costeWeb + (numPaginas * numIdiomas * 30);
    }

    if (opcionesSeleccionadas[1]) { // Si se selecciona la opción de campaña SEO
      presupuestoTotal += costeSeo;
    }

    if (opcionesSeleccionadas[2]) { // Si se selecciona la opción de campaña publicitaria
      presupuestoTotal += costePubli;
    }

    return presupuestoTotal;
  }

  agregarPresupuesto(presupuesto: Presupuesto): void {
    this.presupuestos.push(presupuesto);
    
    console.log(presupuesto);
  }
}
















// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PresupuestoService {
//   presupuestos: any [] = [];
//   calcularPresupuesto(opcionesSeleccionadas: boolean[], numPaginas: number, numIdiomas: number): number {
//     let costeWeb: number = 470;
//     let costeSeo: number = 300;
//     let costePubli: number = 200;
//     let presupuestoTotal = 0;

    

//     if (opcionesSeleccionadas[0]) { // Si se selecciona la opción de hacer una página web
//       presupuestoTotal += costeWeb + (numPaginas * numIdiomas * 30);
//     }


//     if (opcionesSeleccionadas[1]) { // Si se selecciona la opción de campaña SEO
//       presupuestoTotal += costeSeo;
//     }

//     if (opcionesSeleccionadas[2]) { // Si se selecciona la opción de campaña publicitaria
//       presupuestoTotal += costePubli;
//     }

//     return presupuestoTotal;
//   }
//   agregarPresupuesto(presupuesto: any) {
//     this.presupuestos.push(presupuesto);
//     console.log(presupuesto);
//   }
// }






















// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PresupuestoService {
//   calcularPresupuesto(opcionesSeleccionadas: boolean[], numPaginas: number, numIdiomas: number): number {
//     const preciosServicios: number[] = [500, 300, 200];
//     let presupuestoTotal = 0;

//     for (let i = 0; i < opcionesSeleccionadas.length; i++) {
//       if (opcionesSeleccionadas[i]) {
//         presupuestoTotal += preciosServicios[i];
//       }
//     }

//     if (opcionesSeleccionadas[0]) { // Si se selecciona la opción de hacer una página web
//       presupuestoTotal += numPaginas * numIdiomas * 30;
//     }

//     return presupuestoTotal;
//   }
// }


