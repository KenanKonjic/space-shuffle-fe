import { Injectable } from '@angular/core';
import {UserModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private USER_MOCK: Array<UserModel> = [
      {
        username: 'Kenan',
        password: 'Kenan'

      },
      {
        username: 'Amra',
        password: 'Amra'
      },
      {
        username: 'Adna',
        password: 'Adna'
      },
      {
        username: 'Salih',
        password: 'Salih'
      }
    ]
  constructor() { }
}
