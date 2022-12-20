package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;
@Transactional
public interface IBottleRepository extends JpaRepository<Bottle, Integer> {

    @Query(value = "select b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume, " +
            " b.price*(100 - ifnull(p.discount, 0))/100 as discountMoney" +
            " from bottle b " +
            " join promotion p on b.promotion_id = p.id" +
            " where b.name like %:name% and b.is_delete = 0" +
            " order by discountMoney desc ", countQuery = " select count(*)" +
            " from bottle b " +
            " join promotion p on b.promotion_id = p.id" +
            " where b.name like %:name%  and b.is_delete = 0 ",
            nativeQuery = true)
    Page<IBottleDtoHome> findAllBottle(@Param("name") String name, Pageable pageable);


    @Query(value = "select b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume, " +
            " b.price*(100 - ifnull(p.discount, 0))/100 as discountMoney" +
            " from bottle b " +
            " join promotion p on b.promotion_id = p.id" +
            " where b.name like %:name% and b.is_delete = 0 " +
            "having (discountMoney between :startPrice and :endPrice) " +
            " order by discountMoney desc ", countQuery = " select count(*)," +
            " b.price*(100 - ifnull(p.discount, 0))/100 as discountMoney" +
            " from bottle b " +
            " join promotion p on b.promotion_id = p.id" +
            " where b.name like %:name%  and b.is_delete = 0 " +
            " having (discountMoney between :startPrice and :endPrice)",
            nativeQuery = true)
    Page<IBottleDtoHome> findAllBottleByPrice(@Param("name") String name,
                                              @Param("startPrice") int startPrice,
                                              @Param("endPrice") int endPrice, Pageable pageable);


    @Query(value = "select  b.id as id, b.name as name, b.image as image, b.price as price, b.volume as volume," +
            " b.color as color, b.description as description, bt.name as bottleType, m.name as material  " +
            "  from bottle b " +
            " left join bottle_type bt on b.bottle_type_id = bt.id " +
            " left join material m on m.id = b.material_id where b.id =:id and b.is_delete = 0 ", nativeQuery = true)
    Optional<IBottleDto> bottleDetail(@Param("id") Integer id);




}
