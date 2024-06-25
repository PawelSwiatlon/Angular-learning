import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { injectMutation, injectQuery } from "@ngneat/query";
import { environment } from "../../../../../../environments/environment";
import { UsersResult } from "../../../types/users-results";
import { UserListElement } from "../types/user-list-element";



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);
  private _query = injectQuery();
  private _mutation = injectMutation();

  queryUsers() {
    return this._query<UsersResult<UserListElement>>({
      queryKey: ['users'] as const,
      queryFn: () => {
        return this._http.get<UsersResult<UserListElement>>(`${environment.apiUrl}/users`);
      }
    });
  }
}
