import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list-persons',
  templateUrl: './card-list-persons.component.html',
  styleUrls: ['./card-list-persons.component.css']
})
export class CardListPersonsComponent implements OnInit {

  loading: boolean = true;
  persons: any[] = []

  constructor() { }

  async ngOnInit() {
    await this.getAllPersons();
  }
  
  async getAllPersons() {
    const URL_TO_FETCH = "http://localhost:3000/"
    await fetch(URL_TO_FETCH).then(res => { res.json().then(res => {
      this.persons = res;
      this.loading = false
    })})
  }

}
