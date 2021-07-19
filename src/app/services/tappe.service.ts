import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TappeService {

  constructor(private api: ApiService) { }
  
  public getByIdViaggio(id: number) {
    return this.api.get(`${environment.services.tappe}/findByIdViaggio/${id}`, null);
  }
}
