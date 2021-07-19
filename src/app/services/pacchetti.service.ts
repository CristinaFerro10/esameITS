import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PacchettiService {

  constructor(private api: ApiService) { }
  
  public getByIdTappa(id: number) {
    return this.api.get(`${environment.services.pacchetti}/findByIdTappa/${id}`, null);
  }
}
