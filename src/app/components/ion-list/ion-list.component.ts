import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Song } from 'src/app/models/interfaces';

@Component({
	selector: 'ion-list',
	templateUrl: './ion-list.component.html',
	styleUrls: ['./ion-list.component.scss']
})
export class IonListComponent implements OnInit, OnChanges {

	@Input() search: string;

	public songs: Song[] = [];
	public count: number = 0;

	constructor(private _http: HttpService) { }

	public ngOnInit(): void { }

	public ngOnChanges(): void {
		if (this.search == null) {
			this.songs = [];
			this.count = 0;
		} else {
			this._http.searchSongs(this.search).subscribe(data => {
				this.songs = data.results;
				this.count = data.resultCount;
			});
		}
	}

	public isFavourite(trackId: number): string {
		return false ? 'heart' : 'heart-outline';
	}
}
