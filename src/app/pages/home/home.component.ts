import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataTableOptions } from 'src/app/component/datatable-option';
import IViaggio from 'src/app/interfaces/IViaggio';
import { ViaggiService } from 'src/app/services/viaggi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  constructor(private readonly viaggiService: ViaggiService, private readonly router: Router) { }

  public options: DataTableOptions = {
    colsOptions: [{
      label: 'Descrizione',
      name: 'descrizione',
      type: 'text'
    },
    {
      label: 'Data inizio',
      name: 'datainizio',
      type: 'date'
    },
    {
      label: 'Data fine',
      name: 'datafine',
      type: 'date'
    }
    ]
  };
  public lista: any[] = [];

  ngOnInit(): void {
    this.viaggiService.getAll().subscribe((res) => {
      this.lista = res.content;
    })
  }

  select(event: any) {
    let navEx: NavigationExtras = {
      state: { id: event },
    };
    this.router.navigateByUrl("dettaglio", navEx);
  }

}
