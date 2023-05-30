import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  isEditing: boolean = false;
  client : Client ={} as Client;

  constructor(private ClientService: ClientService){

  }


  ngOnInit(): void {
    this.loadClient();
  }
  loadClient() {
    this.ClientService.getClients().subscribe(
      {
        next: data => this.clients = data
      }
    )
  }
  onSaveEvent(client : Client) {
      if (this.isEditing)

      {
        this.ClientService.update(client).subscribe({
            next: data => {
              this.loadClient();
              this.isEditing = false;
            }
          }
        )
      }
      else {
        this.ClientService.save(client).subscribe(
          {
            next: data => {
              this.clients.push(data);
            }
          }
        )
      }
  }

  edit(client: Client) {
    this.client = client;
    this.isEditing = false;

  }

  delete(client: Client) {
    this.ClientService.delete(client).subscribe({
      next: () => this.loadClient()
    })
  }

}
