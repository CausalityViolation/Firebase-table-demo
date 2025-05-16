import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { List } from '@org/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  getData(): Observable<List[]> {
    const list = collection(this.firestore, 'list');
    return collectionData(list, { idField: 'id' }) as Observable<List[]>;
  }
}
