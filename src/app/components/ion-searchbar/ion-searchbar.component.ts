import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ion-searchbar',
	templateUrl: './ion-searchbar.component.html',
	styleUrls: ['./ion-searchbar.component.scss']
})
export class IonSearchbarComponent implements OnInit {

	@Output() value: EventEmitter<string> = new EventEmitter<string>();

	@Input() placeholder: string = 'Search';
	@Input() badge: number = 0;

    constructor() {	}
	
	public ngOnInit(): void {
		this.badge = localStorage.length;
	}

	public search(input: string): void {
		if (input.replace(/ /g, '') == '') {
			input = null;
		}

		this.value.next(input);
	}

}
