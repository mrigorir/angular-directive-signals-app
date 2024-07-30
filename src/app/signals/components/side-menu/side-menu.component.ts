import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menuIten.interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    { title: 'Contador', route: 'counter' },
    { title: 'Usuarios', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]
}
