import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  id: string = '';
  userDefault: User = {
    id: '',
    name: '',
    email: '',
    description: '',
    phone: '',
  };
  valueDefault = 'Aqui debería ir la información del usuario';
  private _contactService = inject(ContactsService);

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Get the id from the url
    this.id = this.route.snapshot.params['id'];

    this.setFormValues();
  }

  submitForm(form: NgForm) {
    console.log('user edited');
  }

  async setFormValues() {
    try {
      const user = await this._contactService.getContact(this.id);
      this.userDefault = user || this.userDefault;

      if (!user) {
        this.toastr.error('El usuario no ha sido encontrado');
        this.router.navigate(['/contacts']);
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}
