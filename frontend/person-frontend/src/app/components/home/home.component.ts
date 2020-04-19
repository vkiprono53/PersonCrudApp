import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonService} from '../../services/person.service';
import {Observable} from 'rxjs';


export class Person {
  public id: number;
  public firstName: string;
  public lastName: string;
  public occupation: string;
  public age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persons: Person[];

  message: string;

  constructor(private route: Router,
              private personService: PersonService) {
  }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons() {
    console.log('INSIDE HOME TS-----');
    this.personService.getPersons()
      .subscribe(data => {
          this.persons = data;
        },
        error => console.log(error));
  }

  addPerson() {
    console.log('---ADD Ts----');
    this.route.navigate(['person']);
  }

  deletePerson(id) {
    console.log('DELETING PERSON WITH ID=====>' + id);
    this.personService.deletePersons(id)
      .subscribe(response => {
        this.getAllPersons();
        this.message = `Person with id of ${id} deleted successfully!!!`;
        console.log('Deleted person with id ' + id);
      }, error => console.log(error));
  }

  editPerson(id) {
    console.log('---Updating-- Ts----======>ID PASSED IS---->' + id);
    this.route.navigate(['updatePerson', id]);
  }

}
