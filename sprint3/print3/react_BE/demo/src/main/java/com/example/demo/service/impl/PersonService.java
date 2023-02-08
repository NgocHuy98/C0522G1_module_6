package com.example.demo.service.impl;

import com.example.demo.model.Person;
import com.example.demo.repository.IPersonRepository;
import com.example.demo.service.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService implements IPersonService {

@Autowired
private IPersonRepository iPersonRepository;

    @Override
    public Optional<Person> findById(int id) {
        return iPersonRepository.findById(id);
    }

    @Override
    public List<Person> findAll() {
        return iPersonRepository.findAll();
    }

    @Override
    public void savePerson(Person person) {
        iPersonRepository.save(person);
    }

    @Override
    public void deletePerson(int id) {
        iPersonRepository.deletePersonId(id);
    }

    @Override
    public void updatePersonById(Person person) {
        iPersonRepository.updatePerson(person);
    }
}
