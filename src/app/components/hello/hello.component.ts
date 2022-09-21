import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Desde component.ts</h1>`,
  styles: [`h1 {font-family: Lato; color: red;}`]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
