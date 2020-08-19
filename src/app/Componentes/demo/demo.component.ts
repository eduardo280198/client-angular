import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public resultado: number;

  constructor() { 
    this.resultado = 0;
  }

  ngOnInit(): void {
    this.sumar();
  }

  sumar():void{
    this.resultado = 1 + 1;
    console.warn('resultado', this.resultado);
  }

}
