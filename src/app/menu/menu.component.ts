import { Component} from '@angular/core';

interface Menu {
  label: string,
  href: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: Menu[] = [
    {label: 'Home', href: '#' },
    {label: 'About', href: '#' },
    {label: 'Features', href: '#' },
    {label: 'Contacts', href: '#' },
  ]

}
