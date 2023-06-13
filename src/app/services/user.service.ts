import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = `${environment.backendUrl}/user`;
  constructor (private http: HttpClient) { }

  searchUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/search/${username}`);
  }
}


