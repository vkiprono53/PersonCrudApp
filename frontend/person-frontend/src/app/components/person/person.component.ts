import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {Person} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = new Person();
  message: string;

  constructor(private personService: PersonService,
              private route: Router) {
  }

  ngOnInit() {
    this.person = new Person();
  }

  addPerson() {
    console.log('Inside Add----Adding a new person---');
    this.personService.createPerson(this.person)
      .subscribe(data => {
          this.person = data;
          this.message = 'Successfully added a new Person!!';
          this.route.navigate(['home']);
        },
        error => console.log(error));

  }
}

