import { Component} from '@angular/core';
import { IHeaderNavbarItems } from 'src/ts/interface/global.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: IHeaderNavbarItems[] = [
    {label: 'Home', href: '#' },
    {label: 'About', href: '#' },
    {label: 'Features', href: '#' },
    {label: 'Contacts', href: '#' },
  ]

}
