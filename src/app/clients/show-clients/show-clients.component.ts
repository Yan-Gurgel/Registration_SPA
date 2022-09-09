import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationApiService } from '../../registration-api.service';
import { Client } from './client';

@Component({
  selector: 'app-show-clients',
  templateUrl: './show-clients.component.html',
  styleUrls: ['./show-clients.component.css'],
})
export class ShowClientsComponent implements OnInit {

  clients = []
  clientsList$!: Observable<any[]>;

  constructor(private service: RegistrationApiService) {}
  RES_API_SERVER = 'http://localhost:3001/Clients';
  ngOnInit(): void {
    this.clientsList$ = this.service.getClientsList();
  }

   Save() {
    //debugger;
    //this.service.addClient(tihs.client);
  }
}
