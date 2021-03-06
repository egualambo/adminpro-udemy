import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor:EventEmitter<number> = new EventEmitter;

  constructor() { 
    console.log('Leyenda',this.leyenda);
    console.log('progreso',this.progreso);
  }

  ngOnInit(): void {
  }

  cambiarValor(valor:number) {

    if(this.progreso >=100 && valor > 0 ){
      this.progreso = 100;
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
