import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  httpClient: HttpClient;
  private apiBaseUrl: string;

  constructor(httpClient: HttpClient) {
    this.apiBaseUrl = environment.API_hostname;
    this.httpClient = httpClient;
  }

  // handle all Get requests appending id in urls
  public get<T>(actionName: string, params?: HttpParams): Observable<T> {
    const apiUrl = `${this.apiBaseUrl}/${actionName}/${params}`;
    return this.httpClient.get<T>(apiUrl);
  }

  // handle all Get requests
  public gets<T>(actionName: string, params?: HttpParams): Observable<T> {
    const apiUrl = `${this.apiBaseUrl}${actionName}`;
    return this.httpClient.get<T>(apiUrl, { params });
  }


    // handle all guardian get requests
    public guardianapisGet<T>(actionName: string, params?: HttpParams): Observable<T> {
      const apiUrl = `${actionName}`;
      return this.httpClient.get<T>(apiUrl, { params });
    }


  // handle all Post requests
  public post<T>(
    actionName: string,
    requestData?: any,
    options?: object
  ): Observable<T> {
    const apiUrl = `${this.apiBaseUrl}${actionName}`;
    return this.httpClient.post<T>(apiUrl, requestData, options);
  }

  // handle all Put requests
  public put<T>(
    actionName: string,
    requestData?: any,
    params?: HttpParams,
    options?: object
  ): Observable<T> {
    const apiUrl = `${this.apiBaseUrl}/${actionName}`;
    return this.httpClient.put<T>(apiUrl, requestData, options);
  }
  // handle all Put requests
  public puts<T>(
    actionName: string,
    requestData?: any,
    params?: HttpParams,
    options?: object
  ): Observable<T> {
    const apiUrl = `${this.apiBaseUrl}/${actionName}`;
    return this.httpClient.put<T>(apiUrl, requestData, options);
  }

    // handle all query params Put requests
    public putRequestWithQueryParams<T>(
      actionName: string,
      params?: HttpParams
    ): Observable<T> {
      const apiUrl = `${this.apiBaseUrl}/${actionName}`;
      return this.httpClient.put<T>(apiUrl,{}, {params});
     
    }

  // handle all Delete requests
  public delete(actionName: string, params?: HttpParams): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/${actionName}`;
    return this.httpClient.delete<any>(apiUrl, { params });
  }
  // handle all Delete requests
  public deletes(actionName: string, params?: HttpParams): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/${actionName}/${params}`;
    return this.httpClient.delete<any>(apiUrl);
  }
}
