import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { APIResponse, APIResult } from '../interfaces/api-response.interface';

@Injectable({
    providedIn: 'root',
})

export class APIService {
    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private readonly API_URL: string = "https://mocki.io/v1/3434e0d9-29e7-470e-b314-98e21450bb1d";

    constructor(private http: HttpClient) { }

    getData(): Observable<APIResult[]> {
        return this.http.get<APIResponse>(this.API_URL, {
            headers: this.httpHeaders
        }).pipe(map(response => response.results));

    }
}