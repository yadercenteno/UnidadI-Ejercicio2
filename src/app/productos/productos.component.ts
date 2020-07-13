import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public producto: Producto = new Producto();
  public productos: Array<Producto> = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void {
    this.productos.push(this.producto);

    this.producto = new Producto();
  }

}
