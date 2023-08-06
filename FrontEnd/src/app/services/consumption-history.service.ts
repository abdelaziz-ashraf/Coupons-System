import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Consumptions } from '../models/consumptions';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionHistoryService {

  private apiServerUrl= environment.apiUrl

  constructor(private http: HttpClient) { }

  public getConsumptionHistory(): Observable<Consumptions[]> {
    return this.http.get<Consumptions[]>(`${this.apiServerUrl}/consumption-history/`)
  }

  public getConsumptionHistoryByCouponCode(code: string): Observable<Consumptions[]> {
    return this.http.get<Consumptions[]>(`${this.apiServerUrl}/consumption-history/${code}`)
  }

}
 