import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  updateDoc,
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
    return collectionData(this._collection, { idField: 'id' }) as Observable<
      User[]
    >;
  }

  createContact(contact: User) {
    return addDoc(this._collection, contact);
  }

  updateContact(id: string, contact: User) {
    const document = doc(this._firestore, PATH, id);
    return updateDoc(document, { ...contact });
  }

  async getContact(id: string) {
    const document = doc(this._firestore, PATH, id);
    try {
      const snapshot = await getDoc(document);
      return snapshot.data() as User;
    } catch (e: any) {
      console.error(e);
      return undefined;
    }
  }
}
