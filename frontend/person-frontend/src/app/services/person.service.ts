import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../components/home/home.component';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = 'http://localhost:8090/api/v1/persons';
  person: Person;

  constructor(private httpClient: HttpClient) {
  }
    getPersons(): Observable<any> {
    console.log('Getting Persons---->');
    return this.httpClient.get<Person[]>(this.baseUrl);
  }

  deletePersons(id) {
    console.log('Deleting Person with is====>' + id);
    return this.httpClient.delete<Person>(`${this.baseUrl}/${id}`);
  }

  getPersonById(id) {
    console.log('Getting a person with----->id====' + id);
    return this.httpClient.get<Person>(`${this.baseUrl}/${id}`);
  }

  editPersons(id, person) {
    return this.httpClient.put<Person>(`${this.baseUrl}/${id}`, person);
  }

  createPerson(person) {
    return this.httpClient.post<Person>(`${this.baseUrl}`, person);
  }
}
