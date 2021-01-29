import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) {}

	public searchAlbum(author: string): Observable<any> {
		const params = new HttpParams().set('term', author).set('entity', 'song');
		return this.http.get<any>(environment.url + '/search', { params });
	}

}
