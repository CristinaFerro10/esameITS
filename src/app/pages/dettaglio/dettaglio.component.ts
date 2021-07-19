import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableOptions } from 'src/app/component/datatable-option';
import { PacchettiService } from 'src/app/services/pacchetti.service';
import { TappeService } from 'src/app/services/tappe.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  public id: number;
  public options: DataTableOptions = {
    colsOptions: [{
      label: 'Città',
      name: 'citta',
      type: 'text'
    },
    {
      label: 'Data',
      name: 'data',
      type: 'date'
    }
    ]
  };
  public optionsPacchetti: DataTableOptions = {
    colsOptions: [{
      label: 'Descrizione',
      name: 'descrizione',
      type: 'text'
    },
    {
      label: 'Costo',
      name: 'costo',
      type: 'number'
    }
    ]
  };
  public lista: any[] = [];
  public listaPacchetti: any[] = [];
  public viaggio: string;
  public tappa!: string;
  public mostraDialog: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly pacchettiService: PacchettiService,
    private readonly tappeService: TappeService) {
    this.id = history.state.id?.idviaggio;
    this.viaggio = history.state.id?.descrizione;
    if (this.id === undefined) {
      this.router.navigateByUrl("home");
    }
  }

  ngOnInit(): void {
    this.lista = [];
    this.tappeService.getByIdViaggio(this.id).subscribe((res) => {
      this.lista = res;
    })
  }

  select(event: any) {
    this.tappa = event.idtappa + " - " + event.citta;
    this.pacchettiService.getByIdTappa(event.idtappa).subscribe((res) => {
      this.listaPacchetti = res;
      this.mostraDialog = true;
    })
  }

  chiudiDialog() {
    this.mostraDialog = false;
  }

}
