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

  ngOnInit(): void {
    this.getAllPersons();
  }
  
  getAllPersons() {
    const URL_TO_FETCH = "http://localhost:3000/"
    fetch(URL_TO_FETCH).then(res => { res.json().then(res => {
      this.persons = res;
      this.loading = false
    })})
  }

}
