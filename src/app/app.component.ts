import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  increment: any;

  constructor(private afs: AngularFirestore) {
    this.increment = firebase.firestore.FieldValue.increment(1);
  }

  incrementScore() {
    const storyRef = this.afs.collection("users").doc("FxJeM4lWaK3iVUOL6OsK");
    storyRef.update({ score: this.increment });
  }

  getBook() {
    this.afs
      .collection("users", ref => ref.where("name", "==", "Tom Hanks"))
      .valueChanges()
      .subscribe(console.log);
  }
}
