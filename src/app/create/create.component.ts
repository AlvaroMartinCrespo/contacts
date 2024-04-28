import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  private _contactService = inject(ContactsService);
  constructor(private toastr: ToastrService) {}
  submitForm(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const phone = form.value.phone;
    const description = form.value.description;

    if (!name || !email || !phone || !description) {
      this.toastr.error('Por favor, complete todos los campos');
    } else {
      this._contactService.createContact(form.value);
      this.toastr.success('Contact created');
      form.reset();
    }
  }
}
