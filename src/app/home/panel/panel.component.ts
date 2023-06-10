import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  mensajeModalA: string = " Especifica el número de páginas que quieres en tu web.";
  mensajeModalB: string = " Especifica el número de idiomas que quieres en tu web.";
  
  @Input() numPaginas: number = 1;    // numero de páginas recibidas como entrada
  @Input() numIdiomas: number = 1;    // numero de idiomas recibidos como entrada
  @Output() numPaginasChange = new EventEmitter<number>();      // evento que emite el cambio en el numero de paginas
  @Output() numIdiomasChange = new EventEmitter<number>();      // evento que emite el cambio en el numero de idiomas
  @Output() opcionesSeleccionadasChange = new EventEmitter<boolean[]>();    // evento que emite el cambio en las opciones seleccionadas



  constructor() {}

  

  openModal(modalId: string): void {
    let modalElement = document.getElementById(modalId);      // obtiene el elemento del modal con la ID proporcionado
    if (modalElement) {
      modalElement.classList.add('show');                     // añade la clase para enseñar el modal
      modalElement.style.display = 'block';
      document.body.classList.add('modal-open');
      modalElement.addEventListener('click', this.openBackdrop.bind(this, modalId)); // escucha si hay click para el evento del modal
    }
  }
  

  closeModal(modalId: string): void {
    let modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.classList.remove('show');                // borra la clase para que no se vea
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open');
      modalElement.removeEventListener('click', this.closeModal.bind(this, modalId));   // quita el listener de evento de clic del modal
    }
  }

  openBackdrop(modalId: string): void {
    let modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open');
      modalElement.removeEventListener('click', this.closeModal.bind(this, modalId));   // quita el listener de evento de clic del modal
    }
  }
  
  
  
  incrementarPaginas(): void {
    this.numPaginas++;
    this.actualizarNumPaginas();      // actualiza el numero de paginas emitido mediante el evento
  }

  decrementarPaginas(): void {
    if (this.numPaginas > 1) {
      this.numPaginas--;
      this.actualizarNumPaginas();
    }
  }

  incrementarIdiomas(): void {
    this.numIdiomas++;
    this.actualizarNumIdiomas();
  }

  decrementarIdiomas(): void {
    if (this.numIdiomas > 1) {
      this.numIdiomas--;
      this.actualizarNumIdiomas();
    }
  }

  actualizarNumPaginas(): void {
    if (!this.numPaginas) {
      this.numPaginas = 1;          
    }
    this.numPaginasChange.emit(this.numPaginas);
  }

  actualizarNumIdiomas(): void {
    if (!this.numIdiomas) {
      this.numIdiomas = 1;
    }
    this.numIdiomasChange.emit(this.numIdiomas);
  }

  cambiarOpcionesSeleccionadas(index: number, valor: boolean): void {
    const opcionesSeleccionadas: boolean[] = [false, false, false];
    opcionesSeleccionadas[index] = valor;
    this.opcionesSeleccionadasChange.emit(opcionesSeleccionadas);
  }
  
}



