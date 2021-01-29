import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';

import { AppComponent } from './app.component';
import { IonSearchbarComponent } from './components/ion-searchbar/ion-searchbar.component';
import { IonListComponent } from './components/ion-list/ion-list.component';

@NgModule({
	declarations: [
		AppComponent,
		IonSearchbarComponent,
		IonListComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
