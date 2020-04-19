import {Component, OnInit} from '@angular/core';
import {Person} from '../home/home.component';
import {PersonService} from '../../services/person.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  person: Person;
  id: number;
  message: String;

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.person = new Person();
    this.id = this.route.snapshot.params.id;
    this.personService.getPersonById(this.id)
      .subscribe(data => {
          console.log('DATA INSIDE ONINIT====>' + data);
          this.person = data;
        },
        error => console.log(error));

  }

  editPerson() {
    console.log('INSIDE UPDATING_----');
    this.personService.editPersons(this.id, this.person)
      .subscribe(data => {
        this.person = data;
        this.message = `The person with id: ${this.id} Updated successfully! `;
      }, error => console.log(error));
    this.router.navigate(['home']);
  }
}
