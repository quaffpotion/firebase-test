import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import "firebase/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private afs: AngularFirestore) {}

  incrementScore() {
    this.afs
      .collection("books")
      .add({
        name: "Keanu Reeves",
        score: 5
      })
      .catch(e => console.log("Error adding document: ", e));
  }

  getBook() {
    this.afs
      .collection("users", ref => ref.where("name", "==", "Tom Hanks"))
      .valueChanges()
      .subscribe(console.log);
  }
}
