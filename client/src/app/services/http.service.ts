import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Promise<T> {
    return this.http
      .get<T>(url, { params, headers })
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }

  post<T>(
    url: string,
    body: any,
    headers?: HttpHeaders
  ): Promise<T> {
    return this.http
      .post<T>(url, body, { headers })
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }

  put<T>(
    url: string,
    body: any,
    headers?: HttpHeaders
  ): Promise<T> {
    return this.http
      .put<T>(url, body, { headers })
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }

  delete<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Promise<T> {
    return this.http
      .delete<T>(url, { params, headers })
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }

  patch<T>(
    url: string,
    body: any,
    headers?: HttpHeaders
  ): Promise<T> {
    return this.http
      .patch<T>(url, body, { headers })
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }

  request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    options: {
      body?: any;
      params?: HttpParams;
      headers?: HttpHeaders;
    } = {}
  ): Promise<T> {
    return this.http
      .request<T>(method, url, options)
      .toPromise()
      .then((response) => {
        if (response === undefined) {
          throw new Error('Response is undefined');
        }
        return response;
      });
  }
}
