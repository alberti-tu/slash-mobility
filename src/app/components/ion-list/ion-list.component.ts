import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
	selector: 'ion-list',
	templateUrl: './ion-list.component.html',
	styleUrls: ['./ion-list.component.css']
})
export class IonListComponent implements OnInit, OnChanges {

	@Input() search: string;

	public albums: any[] = [];

	constructor(private _http: HttpService) { }

	public ngOnInit(): void { }

	public ngOnChanges(): void {
		if (this.search == null) {
			this.albums = [];
		} else {
			this._http.searchAlbum(this.search).subscribe(data => this.albums = data);
		}
	}

}
