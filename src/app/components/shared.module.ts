import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    imports: [],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }