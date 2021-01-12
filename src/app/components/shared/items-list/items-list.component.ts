import {EventEmitter, Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() data: Product[];
  @Input() displayAttr: string;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeProductPromo(item: Product): void {
    this.delete.emit(item);
  }
}
