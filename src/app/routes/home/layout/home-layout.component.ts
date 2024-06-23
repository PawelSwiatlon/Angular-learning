import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/headercomponent';


@Component({
  standalone: true,
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NgClass,
    HeaderComponent
  ],
})
export class HomeLayoutComponent {

}
