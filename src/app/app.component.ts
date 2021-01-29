import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public searchValue: string;

	constructor() { }

	public getValue(value: string) {
		this.searchValue = value;
	}
}
