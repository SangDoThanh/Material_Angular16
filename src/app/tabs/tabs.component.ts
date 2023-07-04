import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  standalone: true,
  imports: [MatTabsModule],
})
export class TabsComponent {

}
