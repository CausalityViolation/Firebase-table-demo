import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { List } from '@org/shared';

@Component({
  selector: 'lib-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: List[] = [];
}
