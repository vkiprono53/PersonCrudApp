package com.kiprono.person.controllers;

import com.kiprono.person.models.Person;
import com.kiprono.person.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

/**
 * @author Vkiprono on 4/17/20 ---10:30 AM
 * @project person
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class PersonController {

    private PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/persons")
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @GetMapping("/persons/{id}")
    public ResponseEntity<Person> findById(@PathVariable Long id) {
        Person person = personService.findById(id);
        System.out.println("ID HERE IS========>" + id);

        if (person == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(person);

    }

    @DeleteMapping("/persons/{id}")
    public ResponseEntity<Person> deleteById(@PathVariable Long id) {
        Person person = personService.findById(id);
        if (person == null) {
            return ResponseEntity.notFound().build();
        }
        personService.deletePerson(person);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/persons")
    public ResponseEntity<Person> createPerson(@Valid @RequestBody Person person, BindingResult bindingResult) {
        Person person1 = personService.save(person);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(person1.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping("/persons/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person person) {
        Person person1 = personService.findById(id);
        if (person1 == null) {
            ResponseEntity.notFound().build();
        }
        person.setId(id);
        personService.save(person);
        Person updatedPerson = personService.save(person);
        return ResponseEntity.ok(updatedPerson);

    }
}

