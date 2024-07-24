import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

interface columnsType {
  name: string;
  field: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columns: any[] = [];
  @Input() title = '';
  @Input() data: any[];
  @Input() totalRecords: number;
  @Input() items: any[] = [];
  @Input() filterFields = [];
  @Input() returnOrdrer = false;
  @Input() footer = false;
  @Input() footerPanelInfo: any;
  @Input() footerButtons: any = [];
  @Output() deleteItemsEvent = new EventEmitter();
  @Output() itemsEventEmitter = new EventEmitter();
  @Output() lazyLoadEventEmitter = new EventEmitter();
  selectedItems = [];

  representatives: any[] = [];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  ngOnChanges(): void {}
  loadLazyListner(event: any) {
    this.lazyLoadEventEmitter.emit(event);
  }
  deleteItems() {
    this.deleteItemsEvent.emit(this.selectedItems);
    this.selectedItems = [];
  }

  itemEventEmitter = (): void =>
    this.itemsEventEmitter.emit(this.selectedItems);
  changeStoreStatus(id: number) {
    this.itemsEventEmitter.emit(id);
  }

  footerButtonClickEventListner(emitterName: any) {
    console.log(emitterName);
    switch (emitterName) {
      case 'delete':
        this.deleteItems();
        break;
      case 'draft':
      case 'release':
        this.itemEventEmitter();
        break;
      default:
        break;
    }
  }
}
