package com.kiprono.person.repositories;

import com.kiprono.person.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Vkiprono on 4/17/20 ---10:30 AM
 * @project person
 */
@Repository
public interface PersonRepository extends JpaRepository<Person,Long> {
}
