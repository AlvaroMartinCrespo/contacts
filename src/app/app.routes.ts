import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: '**',
    redirectTo: 'contacts',
  },
];
