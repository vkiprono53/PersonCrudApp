package com.kiprono.person.services;

import com.kiprono.person.models.Person;
import com.kiprono.person.repositories.PersonRepository;
import org.aspectj.weaver.patterns.PerObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Vkiprono on 4/17/20 ---10:31 AM
 * @project person
 */
@Service
public class PersonService {
    private PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

    public Person findById(Long id){
        //Long personId  = personRepository.findById(id);
        return personRepository.findById(id).get();
    }

    public void deletePerson(Person person){
        personRepository.delete(person);
    }

    public Person save(Person person){
        return personRepository.save(person);
    }
}
