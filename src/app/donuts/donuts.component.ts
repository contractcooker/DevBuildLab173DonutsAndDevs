import { Component, OnInit, Input } from '@angular/core';
import { Donut, Donuts, DonutDetail  } from '../interfaces/donutList';
import { DonutService } from '../donuts.service'



@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss']
})
export class DonutsComponent implements OnInit {
  donuts:Donut;
  constructor(private donutData:DonutService) { 
    
  }

  ngOnInit(): void {
    this.donutData.getDonuts().subscribe(
      (data: Donut) => this.donuts = { ...data }, 
      error => console.error(error)
    );
  }

}