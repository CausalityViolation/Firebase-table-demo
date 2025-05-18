import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { List } from '@org/shared';

@Component({
  selector: 'lib-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: List[] = [];
  searchTerm = '';

  filterGames(): List[] {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) return this.data;
    return this.data.filter((game) => game.title.toLowerCase().includes(term));
  }
}
