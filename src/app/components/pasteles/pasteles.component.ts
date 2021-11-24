import { Component, OnInit } from '@angular/core';
import { Pastel } from './pastel';
import { PastelserviceService } from './pastelservice.service';

@Component({
  selector: 'app-pasteles',
  templateUrl: './pasteles.component.html',
  styleUrls: ['./pasteles.component.css']
})
export class PastelesComponent implements OnInit {

  pasteles:Pastel[];
  constructor(private pastelservice:PastelserviceService) { 
    this.pasteles=[]
  }

  ngOnInit(): void {
    this.pastelservice.getPasteles().subscribe(
      pasteles=>this.pasteles=pasteles
    )
  }

}
