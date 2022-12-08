package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBottleRepository extends JpaRepository<Bottle, Integer> {

    @Query(value = "select b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume " +
            " from bottle b ", countQuery = " select count(*) from bottle ", nativeQuery = true)
    Page<IBottleDtoHome> findAllBottle(String name, Pageable pageable);
}
