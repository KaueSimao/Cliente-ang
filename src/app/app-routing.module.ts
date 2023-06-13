import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  {path: '', component : ClientComponent },
  {path: 'clients', component : ClientComponent },
  {path: 'clientDetails/:id', component : ClientFormComponent },
  {path: 'createClient', component : ClientFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
