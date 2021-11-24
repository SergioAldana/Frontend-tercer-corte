import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelea } from './pelea';

@Injectable({
  providedIn: 'root'
})
export class PeleaserviceService {
  private urlEndpoint:string = 'http://localhost:8080/api/pelea/';
  constructor(private http:HttpClient) {}
    getPelea():Observable<Pelea[]>{
      return this.http.get(this.urlEndpoint).pipe(
        map((response)=>response as Pelea[])
      );
    }
}
