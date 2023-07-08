import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { DialogComponent } from './dialog/dialog.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GirdlistComponent } from './girdlist/girdlist.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'form-field', component: FormfieldComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid-list', component: GirdlistComponent },
  { path: 'expansion', component: ExpansionPanelComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'card', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'input', component: InputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
