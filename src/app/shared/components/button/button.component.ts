import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Params, QueryParamsHandling, RouterModule } from '@angular/router';
import { ButtonVariants, buttonVariants } from '../../types/button-variants';
import { TwMergePipe } from '../../pipes/tw-merge.pipe';


@Component({
  standalone: true,
  selector: 'button-element',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    NgClass,
    TwMergePipe
  ],
})

export class ButtonComponent {
  to = input.required<string>();
  queryParams = input<Params>();
  queryParamsHandling = input<QueryParamsHandling>();
  iconName = input<string>();
  variant = input<ButtonVariants>('default');
  iconOnly = input(false);
  isActive = input(false);
  disabled = input(false);
  className = input('');

  readonly variants = buttonVariants;
}
