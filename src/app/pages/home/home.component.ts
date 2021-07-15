import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatoPosizionamentoService } from 'src/app/services/dato-posizionamento.service';
import { DatoSensoreService } from 'src/app/services/dato-sensore.service';
import { MezzoTrasportoService } from 'src/app/services/mezzo-trasporto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  constructor(public mezzoService: MezzoTrasportoService, public datoposService: DatoPosizionamentoService, public datepipe: DatePipe, public datosensoreService: DatoSensoreService) { }
  public titoli = [
    { name: "denominazione", label: "Denominazione" },
    { name: "descrizione", label: "Descrizone" },
    { name: "posizione", label: "Ultima Posizione" },
    { name: "data", label: "Data e ora" },
  ]
  public titoliSensore = [
    { name: "posApertura", label: "Ultima posizione di Apertura" },
    { name: "posChiusura", label: "Ultima posizione di Chiusura" },
    { name: "numPers", label: "Numero Persone salite" },
  ]
  public lista: any[] = [];
  public listaDatiSensore: any[] = [];
  public datiSensore: any;
  public mostraDialog: boolean = false;
  public denMezzo: string = "";

  ngOnInit(): void {
  }

  // getDatiSensore(l: any){
  //   //find dalla lista e poi metto la denominazione sul titolo
  //   this.datiSensore = this.listaDatiSensore.find(item => item.idMezzo == l.idMezzo)
  //   this.denMezzo = l.denominazione;
  //   this.mostraDialog = true;
  // }

  // chiudiDialog(){
  //   this.mostraDialog = false;
  // }

}
