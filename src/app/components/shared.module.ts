import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonListComponent } from './ion-list/ion-list.component';
import { IonSearchbarComponent } from './ion-searchbar/ion-searchbar.component';

@NgModule({
	declarations: [
        IonListComponent,
        IonSearchbarComponent
    ],
    exports: [
        CommonModule,
        IonListComponent,
        IonSearchbarComponent
    ],
    imports: [ BrowserModule ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }