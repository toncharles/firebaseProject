import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
    //console.log('Hello FirebaseServiceProvider Provider');
  }

  save(course: any){
    this.db.list('courses')
           .push(course)
           .then(r => console.log(r));
  }

}
