import { Component, OnInit } from '@angular/core';
import { transition, trigger, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => *',
      animate("5s", keyframes([
        style({ backgroundColor: "red", offset: 0 }),
        style({ backgroundColor: "blue", offset: 0.2 }),
        style({ backgroundColor: "orange", offset: 0.3 }),
        style({ backgroundColor: "black", offset: 1 })
      ]))
      )
    ])
  ]
})
export class HomeComponent implements OnInit {
  isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
