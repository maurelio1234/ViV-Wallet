import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { LoginService } from './login.service';

const usersEndpoint = 'http://localhost:3000/api/v1/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient, private login: LoginService) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(usersEndpoint);
    }

    saveUser(user: User): Observable<Object> {
        if (isNullOrUndefined(user.id)) {
            return this.http.post(usersEndpoint, user);
        }
        return this.http.put(usersEndpoint + '/' + user.id, user);
    }

    getUser(id: string): Observable<User> {
        return this.http.get<User>(usersEndpoint + '/' + id);
    }

    deleteUser(user: User): Observable<any> {
        return this.http.delete(usersEndpoint + '/' + user.id);
    }
}
