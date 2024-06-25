import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { injectMutation, injectQuery } from "@ngneat/query";
import { environment } from "../../../../../../environments/environment";



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);
  private _query = injectQuery();
  private _mutation = injectMutation();

  queryUsers() {
    return this._query({
      queryKey: ['users'] as const,
      queryFn: () => {
        return this._http.get(`${environment.apiUrl}/users`);
      }
    });
  }
}
