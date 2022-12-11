package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface IBottleRepository extends JpaRepository<Bottle, Integer> {

    @Query(value = "select b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume " +
            " from bottle b ", countQuery = " select count(*) from bottle ", nativeQuery = true)
    Page<IBottleDtoHome> findAllBottle(String name, Pageable pageable);

    @Query(value = "select  b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume," +
            " b.color as color, b.description as description, bt.name as bottleType, m.name as material  " +
            "  from bottle b " +
            " left join bottle_type bt on b.bottle_type_id = bt.id " +
            " left join material m on m.id = b.material_id where b.id =:id and b.is_delete = 0 ", nativeQuery = true)
    Optional<IBottleDto> bottleDetail(@Param("id") Integer id);

}
