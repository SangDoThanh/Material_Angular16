import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgFor} from '@angular/common';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-girdlist',
  templateUrl: './girdlist.component.html',
  styleUrls: ['./girdlist.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatDividerModule,
    NgFor
  ],

})
export class GirdlistComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
