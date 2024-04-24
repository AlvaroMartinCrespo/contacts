import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private toastr: ToastrService) {}
  submitForm(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const phone = form.value.phone;
    const description = form.value.description;

    if (!name || !email || !phone || !description) {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
    } else {
      // Aquí puedes enviar el formulario si todos los campos están llenos
      this.toastr.success('Hello world!', 'Toastr fun!');
    }
  }
}
