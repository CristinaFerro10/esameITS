import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ViaggiService {

  constructor(private api: ApiService) { }
  
  public getAll() {
    return this.api.get(`${environment.services.viaggi}?sort=datainizio,asc`, null);
  }
}
