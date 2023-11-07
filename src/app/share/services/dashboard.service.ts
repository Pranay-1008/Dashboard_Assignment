import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private getDashboardDataURL = `https://1.api.fy23ey05.careers.ifelsecloud.com/`;

  constructor(private http: HttpClient) { }

  getDashboardData(): Observable<any> {
    return this.http.get(this.getDashboardDataURL).pipe(catchError(err => of(err)));
  }

}
