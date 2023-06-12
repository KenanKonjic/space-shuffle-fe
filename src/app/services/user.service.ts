import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private USER_MOCK: Array<UserModel> = [
      {
        username: 'kenank',
        password: 'kenank',
        name: 'Kenan',
        surname: 'Konjic',
        email: 'kenan@example.com',
        hasCar: false

      },
      {
        username: 'amrai',
        password: 'amrai',
        name: 'Amra',
        surname: 'Isakovic',
        email: 'amra@example.com',
        hasCar: true,
      },
      {
        username: 'adnab',
        password: 'adnab',
        name: 'Adna',
        surname: 'Beganovic',
        email: 'adna@example.com',
        hasCar: false,
      },
      {
        username: 'salihm',
        password: 'salihm',
        name: 'Salih',
        surname: 'Music',
        email: 'salih@example.com',
        hasCar: true,
      }
    ]
  constructor() { }
}

// import { Injectable } from '@angular/core';
// import {UserModel} from "../models/user.model";
// import {environment} from "../../environments/environment";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private readonly baseUrl: string = `${environment.backendUrl}/user`;
//   constructor(private http: HttpClient) {}
//
//   getUser(id:number): Observable<UserModel[]>{
//     return this.http.get<UserModel[]>(`${this.baseUrl}/${id}`);
//   }
//
// }

