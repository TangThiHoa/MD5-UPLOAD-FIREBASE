import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {HttpClientModule} from "@angular/common/http";
import { TestFirebaseComponent } from './test-firebase/test-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFirebaseComponent
  ],
  imports: [
    BrowserModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
