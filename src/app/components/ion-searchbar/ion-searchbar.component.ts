import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EMPTY, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'ion-searchbar',
	templateUrl: './ion-searchbar.component.html',
	styleUrls: ['./ion-searchbar.component.scss']
})
export class IonSearchbarComponent implements OnInit, OnDestroy {

	@Output() value: EventEmitter<string> = new EventEmitter<string>();

	@Input() placeholder: string = 'Search';
	@Input() delay: number = 0;
	@Input() badge: number = 0;

	public search = new Subject<string>();

	private _searchSubscription: Subscription;

    constructor() {	}
	
	public ngOnInit(): void {
		this.delay = this.delay > 0 ? this.delay : 0;
		this.badge = localStorage.length;

		this._searchSubscription = this.search
			.pipe(
				debounceTime(this.delay),
				distinctUntilChanged(),
				switchMap(input => {
					if (input.replace(/ /g, '') == '') {
						input = null;
					}

					this.value.next(input);
					
					return EMPTY;
				})
			).subscribe();
	}

	public ngOnDestroy(): void {
		this._searchSubscription.unsubscribe();
		this._searchSubscription = null;
	}
}
