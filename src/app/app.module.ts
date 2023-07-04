import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormfieldComponent } from './formfield/formfield.component';
import { BadgeComponent } from './badge/badge.component';
import { MatListModule} from '@angular/material/list';
import { DialogComponent } from './dialog/dialog.component';
import { TablepopupComponent } from './dialog/tablepopup/tablepopup.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TableeditpopupComponent } from './dialog/tableeditpopup/tableeditpopup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        AppComponent,
        TablepopupComponent,
        TableeditpopupComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        MatListModule,
        MatDialogModule,
        MatButtonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AutocompleteComponent,
        FormfieldComponent,
        BadgeComponent,
        DialogComponent,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatTabsModule
    ]
})
export class AppModule { }
