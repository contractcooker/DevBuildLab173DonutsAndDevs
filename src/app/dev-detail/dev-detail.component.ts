import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interfaces/devs';

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent implements OnInit {
  @Input() myDev:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
