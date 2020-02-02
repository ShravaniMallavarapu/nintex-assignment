import { Injectable } from '@angular/core'
import { HttpClient, HttpParams  } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import {  HttpErrorResponse } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  serviceUrl: string = 'http://nmflightapi.azurewebsites.net/api/flight'

  constructor(private http: HttpClient) { }
  getFlightResponse(data: any): Observable<any> {
    let params = new HttpParams()
    params = params.append('DepartureAirportCode', data.DepartureAirportCode)
    params = params.append('ArrivalAirportCode', data.ArrivalAirportCode)
    params = params.append('DepartureDate', data.DepartureDate)
    params = params.append('ReturnDate', data.ReturnDate)
    
    return this.http.get(this.serviceUrl, {params: params})
      .pipe(
        catchError(this.error)
      )
  }
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.status}  and message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
