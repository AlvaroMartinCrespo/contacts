import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { ContactsService } from '../contacts.service';
import { AsyncPipe } from '@angular/common';

// El AsyncPipe se suscribe al observable para actualizar la página en tiempo real con los datos de la base de datos
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CardComponent, FormsModule, AsyncPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  value: string = '';

  private _contactService = inject(ContactsService);
  contactos = this._contactService.getContacts();

  search(value: string) {
    console.log(value);
  }
}
