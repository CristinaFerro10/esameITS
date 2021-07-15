import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IMezzo from '../interfaces/IMezzo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MezzoTrasportoService {

  constructor(private api: ApiService) { }
  public getAllMezzi() {
    return this.api.get(`${environment.services.mezzi}`, null);
  }
}
