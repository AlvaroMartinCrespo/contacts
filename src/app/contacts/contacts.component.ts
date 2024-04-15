import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  arrayContacs: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}
