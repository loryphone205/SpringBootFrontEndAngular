import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private backEndUrl = 'http://localhost:8080/api/content';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.backEndUrl);
  }

  postData(data: any) {
    return this.http.post(this.backEndUrl, data);
  }

  deleteData(pos: any) {
    return this.http.delete(this.backEndUrl + '/' + pos);
  }

  putData(pos: number, data: any) {
    return this.http.put(this.backEndUrl + '/' + pos, data);
  }
}
