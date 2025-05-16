import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '@org/api';
import { List } from '@org/shared';
import { TableComponent } from '@org/ui';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private firebaseService = inject(FirebaseService);

  games: List[] = [];

  ngOnInit() {
    this.firebaseService.getData().subscribe((data) => {
      this.games = data;
    });
  }
}
