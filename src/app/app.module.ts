import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
