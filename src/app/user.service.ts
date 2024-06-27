import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(user: User) {
    this.http
      .post('https://develop.bam.fan/account/v1/user', user)
      .subscribe((response) => {
        console.log('Odgovor od servera', response);
      });
  }

  getUser(id: number) {
    this.http
      .get(`https://develop.bam.fan/account/v1/user/${id}`)
      .subscribe((user) => console.log('Dobijeni podaci:', user));
  }
}
