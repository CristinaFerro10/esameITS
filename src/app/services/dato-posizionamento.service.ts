import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DatoPosizionamentoService {

  constructor(public api: ApiService) { }
  public getByMezzo(mezzo: number) {
    return this.api.get(`${environment.services.datoposizionamento}/trovaByMezzo/` + mezzo, null);
  }
}
