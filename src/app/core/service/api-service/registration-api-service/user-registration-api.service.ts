import { BaseService } from '../base-api.service'
import { apiURLs } from '../api-urls.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserSignUpService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);

  }
  usersRegistration(requestData) {
    return this.post(apiURLs.userSignup, requestData)
  }
}