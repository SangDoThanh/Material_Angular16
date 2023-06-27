import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatIconModule
  ],
})
export class ButtonToggleComponent {

}
