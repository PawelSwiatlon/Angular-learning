import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderElements } from '../../utils/header-elements.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';


@Component({
  standalone: true,
  selector: 'header-element',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    NgClass,
    ButtonComponent
  ],
})

export class HeaderComponent {
  headerElements = HeaderElements;
}
