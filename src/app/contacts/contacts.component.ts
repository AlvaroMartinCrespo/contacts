import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user.interface';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  users: User[] | undefined;
  value: string = '';

  ngOnInit(): void {
    this.users = [
      {
        id: '1',
        name: 'Alvaro1',
        email: 'a@a.es',
        description: 'Contenido de la tarjeta. Tiene que ser extenso1',
        tlf: '123456789',
      },
      {
        id: '2',
        name: 'Alvaro2',
        email: 'a@a.es',
        description: 'Contenido de la tarjeta. Tiene que ser extenso2',
        tlf: '123456789',
      },
      {
        id: '3',
        name: 'Alvaro3',
        email: 'a@a.es',
        description: 'Contenido de la tarjeta. Tiene que ser extenso3',
        tlf: '123456789',
      },
      {
        id: '4',
        name: 'Alvaro4',
        email: 'a@a.es',
        description: 'Contenido de la tarjeta. Tiene que ser extenso4',
        tlf: '123456789',
      },
    ];
  }

  search(value: string) {
    console.log(value);
  }
}
