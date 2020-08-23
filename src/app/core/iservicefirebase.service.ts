import { ICrud } from './icrud.interface';
import { Model } from '../models/model';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {
    ref: AngularFirestoreCollection<T>; // coleção de documentos

    constructor(
        protected type: new() => T,
        protected firestore: AngularFirestore,
        public path: string
    ) {
        this.ref = this.firestore.collection<T>(this.path);
    }

    get(id: string): Observable<T> {
        const doc = this.ref.doc<T>(id);
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
    }

    list(): Observable<T[]> {
        return this.ref.valueChanges();
    }

    createOrUpdate(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }

    docToClass(snapshotDoc: any) {
        const obj = {
            id: snapshotDoc.id,
            ...(snapshotDoc.data() as T)
        };
        const typed = plainToClass(this.type, obj);
        return typed;
    }

}
