import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private apiUrl = 'http://localhost:3000/mini-url/';

  constructor(private httpService: HttpService) {}

 async shortenUrl(originalUrl: string): Promise<any> {
    const payload = { originalUrl, userId:1 };
   return await this.httpService.post(this.apiUrl+'create', payload)
  }
}
