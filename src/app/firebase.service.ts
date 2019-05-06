import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }



  getItem() {
    return this.http.get("https://us-central1-angular-fire-e0c4f.cloudfunctions.net/getItem");
  }

}
