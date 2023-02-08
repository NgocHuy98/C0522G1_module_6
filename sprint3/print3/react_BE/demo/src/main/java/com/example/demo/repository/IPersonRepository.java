package com.example.demo.repository;

import com.example.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface IPersonRepository extends JpaRepository<Person, Integer> {
    Optional<Person> findById(int id);

    @Modifying
    @Query(value = " delete from person where id = :id ", nativeQuery = true)
    void deletePersonId(@Param("id") int id);

    @Modifying
    @Query(value = "UPDATE person SET name = :#{#u.name}," +
            "company = :#{#u.company}, " +
            "age = :#{#u.age} " +
            "WHERE id = :#{#u.id}", nativeQuery = true)
    void updatePerson(@Param("u") Person person);
}
