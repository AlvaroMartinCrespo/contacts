import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  arrayContacs: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  value: string = '';

  search(value: string) {
    console.log(value);
  }
}
