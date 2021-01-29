import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public placeholder = 'Search';
	public delay = 500;

	public search: string;
	public likes: number;

	constructor() { }

}
