import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';

const PATH = 'contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  // Inyectamos el servicio de Firestore
  private _firestore: Firestore = inject(Firestore);
  // Obtenemos la colección de la base de datos firestore
  private _collection = collection(this._firestore, PATH);

  /**
   * Obtenemos los datos de la colección
   * @returns observable
   */
  getContacts() {
    return collectionData(this._collection) as Observable<User[]>;
  }

  createContact(contact: User) {
    return addDoc(this._collection, contact);
  }
}
