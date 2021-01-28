import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  url: string = "https://trefle.io/api/v1/plants?token=<API_KEY_HERE>"

  constructor(private http: HttpClient) { }
}
