package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.service.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/person")
public class ApiController {

    @Autowired
    private IPersonService iPersonService;

    @GetMapping("/list")
    public ResponseEntity<List<Person>> getAllPerson() {
        List<Person> personList = iPersonService.findAll();
        if (personList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(personList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addPerson(@RequestBody Person person) {
        iPersonService.savePerson(person);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePerson(@PathVariable int id) {

        iPersonService.deletePerson(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> saveUpdate(@PathVariable int id) {
        Optional<Person> person = iPersonService.findById(id);
        if (person.isPresent()) {

            iPersonService.updatePersonById(person.get());
            return new ResponseEntity<>(person.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
