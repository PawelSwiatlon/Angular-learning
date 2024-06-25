import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { UserListElement } from '../types/user-list-element';

@Component({
  standalone: true,
  selector: 'user-table-record',
  templateUrl: './user-table-record.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe
  ],
})
export class UserTableRecord {
  data = input.required<UserListElement[]>();
  isLoading = input(false);
}
