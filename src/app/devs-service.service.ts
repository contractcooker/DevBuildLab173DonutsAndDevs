import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devs, Person } from './interfaces/devs'


@Injectable({
  providedIn: 'root'
})
export class DevsServiceService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http:HttpClient) { }

getDevs() {
  return this.http.get<Devs>(`${this.apiUrl}`)
}

}
