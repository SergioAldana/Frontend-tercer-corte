import { Injectable } from '@angular/core';
import { Pastel } from './pastel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PastelserviceService {
  private urlEndpoint:string = 'http://localhost:8080/api/demonio/';
  constructor(private http:HttpClient) {}
    getPasteles():Observable<Pastel[]>{
      return this.http.get(this.urlEndpoint).pipe(
        map((response)=>response as Pastel[])
      );
    }
}
