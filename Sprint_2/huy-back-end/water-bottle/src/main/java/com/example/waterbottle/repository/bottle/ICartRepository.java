package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.dto.bottle.ICartDto;
import com.example.waterbottle.model.bottle.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ICartRepository extends JpaRepository<Cart, Integer> {

    @Query(value = "select * from cart where is_delete = 0 and customer_id = :customerId and bottle_id = :bottleId", nativeQuery = true)
    Optional<Cart> getCart(@Param("customerId") Integer customerId, @Param("bottleId") Integer bottleId);

    @Modifying
    @Query(value = "insert into cart (quantity, date_time, bottle_id, customer_id, is_delete )" +
            " values (:quantity, now(), :bottleId, :customerId, 0)", nativeQuery = true)
    void addBottleToCart(@Param("quantity") Integer quantity,
                         @Param("bottleId") Integer bottleId,
                         @Param("customerId") Integer customerId);

    @Query(value = "select cart.id as id, cart.quantity as quantity, bottle.image as image, bottle.name as name," +
            " bottle.price as price, bottle.price*(100 - ifnull(p.discount, 0))/100 as discountMoney " +
            " from cart" +
            " join bottle on cart.bottle_id = bottle.id " +
            " join promotion p on bottle.promotion_id = p.id " +
            " join customer on customer.id = cart.customer_id  " +
            " where cart.is_delete = 0 and cart.quantity>0 and cart.customer_id = :customerId",
            nativeQuery = true)
    List<ICartDto> findCartByUser(@Param("customerId") Integer id);


    @Modifying
    @Query(value = "update cart set quantity = :quantity " +
            "where  customer_id = :customerId and bottle_id = :bottleId and is_delete = 0 ",
            nativeQuery = true)
    void setCartByQuantity(@Param("quantity") Integer quantity,
                           @Param("customerId") Integer customerId,
                           @Param("bottleId") Integer bottleId);

    @Modifying
    @Query(value = "update cart set quantity = (quantity + 1) where is_delete = 0 and id = :id", nativeQuery = true)
    void increase(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set quantity = (quantity - 1) where is_delete = 0 and id = :id", nativeQuery = true)
    void decrease(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set is_delete = 1 where customer_id = :id ", nativeQuery = true)
    void paid(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set is_delete = 1 where id = :id ", nativeQuery = true)
    void deleteCart(@Param("id") Integer id);


}
