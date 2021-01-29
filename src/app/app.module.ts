import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';

import { AppComponent } from './app.component';

import { SharedModule } from './components/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
