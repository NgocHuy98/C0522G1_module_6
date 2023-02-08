package com.example.demo.service;

import com.example.demo.model.Person;

import java.util.List;
import java.util.Optional;

public interface IPersonService {

    Optional<Person> findById(int id);
    List<Person> findAll();

    void savePerson(Person person);

    void deletePerson(int id);

    void updatePersonById(Person person);
}
