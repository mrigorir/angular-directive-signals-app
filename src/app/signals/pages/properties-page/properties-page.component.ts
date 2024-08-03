import { Component, effect, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent implements OnInit{
  user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.com',
    first_name: 'Goerge',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  counter = signal(1);

  unserChnagedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);

    /* El metodo effect de angular core se limpia a si mismo sin necesidad de recurrir al ngOnDestroy para
        desuscribirse y detecta los cambios que se le indiquen dentro de el sin tener que usar el behavior subject
        de rxjs. Solo se triggerea una vez cada vez que es llamado y al detectar que no tiene mas usos o estamos en otra vista,
        se limpia a si mismo y deja de dispararse.
    */
  })

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1)
    }, 1000);
  }

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }
}
