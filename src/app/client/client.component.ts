import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private ClientService: ClientService,
    private router: Router) {
  }


  ngOnInit(): void {
    this.loadClient();
  }
  loadClient() {
    this.ClientService.getClients().subscribe(
      {
        next: data => this.clients = data
      }
    );
  }
  create() {
    this.router.navigate(['createClient']);
  }
  edit(client: Client) {
    this.router.navigate(['clientDetails', client.id]);
  }

  delete(client: Client) {
    this.ClientService.delete(client).subscribe({
      next: () => this.loadClient()
    })
  }

}
