import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ion-searchbar',
	templateUrl: './ion-searchbar.component.html',
	styleUrls: ['./ion-searchbar.component.css']
})
export class IonSearchbarComponent implements OnInit {

	@Output() value: EventEmitter<string> = new EventEmitter<string>();

    @Input() placeholder: string = 'Search';

    constructor() {	}
	
	public ngOnInit(): void {}

	public search(input: string): void {
		if (input.replace(/ /g, '') == '') {
			input = null;
		}

		this.value.next(input);
	}

}
