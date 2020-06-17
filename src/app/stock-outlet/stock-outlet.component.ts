import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-outlet',
  templateUrl: './stock-outlet.component.html',
  styleUrls: ['./stock-outlet.component.scss']
})
export class StockOutletComponent implements OnInit {

  @Input() stock: Stock;

  constructor() { }

  ngOnInit(): void {
  }

}
