import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {
  private urlEndpoint:string = 'http://localhost:8080/api/cuerpo/';
  constructor(private http:HttpClient) {}
    getClientes():Observable<Cliente[]>{
      return this.http.get(this.urlEndpoint).pipe(
        map((response)=>response as Cliente[])
      );
    }
  
}
