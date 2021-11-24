import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteserviceService } from './clienteservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  clientes:Cliente[];
  constructor(private clienteservice:ClienteserviceService) { 
    this.clientes = [];
  }

  ngOnInit(): void {
    this.clienteservice.getClientes().subscribe(
      clientes=>this.clientes=clientes
    );
  }

}
