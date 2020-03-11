import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDCQwFSghWhpu09KZO0B7SOomc-v8PSt68",
  authDomain: "fir-test-3041f.firebaseapp.com",
  databaseURL: "https://fir-test-3041f.firebaseio.com",
  projectId: "fir-test-3041f",
  storageBucket: "fir-test-3041f.appspot.com",
  messagingSenderId: "43851972851",
  appId: "1:43851972851:web:dfbd6adad9149ab82df786",
  measurementId: "G-SZX2VY6X9E"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
