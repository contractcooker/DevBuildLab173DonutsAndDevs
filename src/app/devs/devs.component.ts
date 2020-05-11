import { Component, OnInit } from '@angular/core';
import { Devs } from '../interfaces/devs';
import { DevsServiceService } from '../devs-service.service';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.scss']
})
export class DevsComponent implements OnInit {
  devs: Devs;

  constructor(private devsService:DevsServiceService) { }

  ngOnInit(): void {
    this.devsService.getDevs().subscribe(
      (data: Devs) => this.devs = { ...data },
      error => console.error(error)
    );
  }

}
