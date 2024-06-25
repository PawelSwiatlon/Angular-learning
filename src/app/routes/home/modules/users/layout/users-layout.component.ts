import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from '../state/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserTableRecord } from '../components/user-table-record.component';



@Component({
  standalone: true,
  selector: 'users-layout',
  templateUrl: './users-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NgClass,
    JsonPipe,
    UserTableRecord
  ],
})
export class UsersLayoutComponent {
  private _usersService = inject(UsersService);
  usersListQuery = toSignal(this._usersService.queryUsers().result$);
}
