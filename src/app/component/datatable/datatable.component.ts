import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTableOptions } from '../datatable-option';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input()
  public lista!: any[];

  @Input()
  public options!: DataTableOptions;

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  select(item: any) {
    this.onSelect.emit(item);
  }
}
