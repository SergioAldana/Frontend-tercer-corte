import { Component, OnInit } from '@angular/core';
import { Pelea } from './pelea';
import { PeleaserviceService } from './peleaservice.service';

@Component({
  selector: 'app-pelea',
  templateUrl: './pelea.component.html',
  styleUrls: ['./pelea.component.css']
})
export class PeleaComponent implements OnInit {

  peleas:Pelea[];
  constructor(private peleaservice:PeleaserviceService) { 
    this.peleas=[]
  }

  ngOnInit(): void {
    this.peleaservice.getPelea().subscribe(
      peleas=>this.peleas=peleas
    )
  }

}
