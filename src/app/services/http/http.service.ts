import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response, Song } from 'src/app/models/interfaces';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) {}

	public searchSongs(author: string): Observable<Response<Song[]>> {
		const params = new HttpParams().set('term', author).set('entity', 'song');
		return this.http.get<Response<Song[]>>(environment.url + '/search', { params });
	}

}
