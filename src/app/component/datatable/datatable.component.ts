import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableOptions } from '../datatable-option';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input()
  public lista: any[] = [{ nome: 'Gino', cognome: 'Rossi', indirizzo: 'indirizzo 1' },{ nome: 'Claudio', cognome: 'Verdi', indirizzo: 'indirizzo 01' }];

  @Input()
  public options: DataTableOptions = {
    colsOptions: [{
      label: 'Nome',
      name: 'nome',
      type: 'text'
    },
    {
      label: 'Cognome',
      name: 'cognome',
      type: 'text'
    },
    {
      label: 'Indirizzo',
      name: 'indirizzo',
      type: 'text'
    }
    ]
  };

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  select(item: any) {
    this.onSelect.emit(item);
  }
}
