package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.dto.bottle.ICartDto;
import com.example.waterbottle.dto.bottle.IToatalPayDto;
import com.example.waterbottle.model.bottle.Cart;
import org.springframework.data.domain.Page;
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
    @Query(value = "insert into cart (quantity, date_time, bottle_id, customer_id, is_delete, is_pay)" +
            " values (:quantity, now(), :bottleId, :customerId, 0, 0)", nativeQuery = true)
    void addBottleToCart(@Param("quantity") Integer quantity,
                         @Param("bottleId") Integer bottleId,
                         @Param("customerId") Integer customerId);

    @Query(value = "select cart.id as id, cart.quantity as quantity, bottle.image as image, bottle.name as name," +
            " bottle.price as price, bottle.price*(100 - promotion.discount)/100 as discountMoney " +
            " from cart " +
            " join bottle on cart.bottle_id = bottle.id " +
            " join promotion on bottle.promotion_id = promotion.id " +
            " join customer on customer.id = cart.customer_id  " +
            " where cart.is_delete = 0 and cart.is_pay = 0 and cart.quantity>0 and cart.customer_id = :customerId",
            nativeQuery = true)
    List<ICartDto> findCartByUser(@Param("customerId") Integer id);

//    @Query(value = "select cart.id as id, cart.quantity as quantity, bottle.image as image, bottle.name as name," +
//            " bottle.price as price, bottle.price*(100 - promotion.discount)/100 as discountMoney," +
//            " sum((bottle.price*(100 - promotion.discount)/100)*cart.quantity) as totalPay " +
//            " from cart " +
//            " join bottle on cart.bottle_id = bottle.id " +
//            " join promotion on bottle.promotion_id = promotion.id " +
//            " join customer on customer.id = cart.customer_id  " +
//            " where cart.is_delete = 0 and cart.quantity>0 and cart.customer_id = :customerId",
//            nativeQuery = true)
//    List<ICartDto> findCartByUser(@Param("customerId") Integer id);


    @Modifying
    @Query(value = "update cart set quantity = :quantity " +
            "where  customer_id = :customerId and bottle_id = :bottleId and is_delete = 0 and is_pay = 0 ",
            nativeQuery = true)
    void setCartByQuantity(@Param("quantity") Integer quantity,
                           @Param("customerId") Integer customerId,
                           @Param("bottleId") Integer bottleId);

    @Modifying
    @Query(value = "update cart set quantity = (quantity + 1) where is_delete = 0 and is_pay = 0 and id = :id", nativeQuery = true)
    void increase(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set quantity = (quantity - 1) where is_delete = 0 and is_pay = 0 and id = :id", nativeQuery = true)
    void decrease(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set is_pay = 1, is_delete = 1, date_time = now() where customer_id = :id and is_delete = 0 and is_pay = 0 ", nativeQuery = true)
    void paid(@Param("id") Integer id);

    @Modifying
    @Query(value = "update cart set is_delete = 1 where id = :id ", nativeQuery = true)
    void deleteCart(@Param("id") Integer id);

    @Query(value = "select sum((bottle.price*(100 - promotion.discount)/100)*cart.quantity) as totalPay," +
            " count(cart.id) as totalProduct " +
            " from cart " +
            " join bottle on cart.bottle_id = bottle.id " +
            " join promotion on bottle.promotion_id = promotion.id " +
            " join customer on customer.id = cart.customer_id " +
            " where cart.is_delete = 0 and cart.is_pay = 0 and customer_id = :id", nativeQuery = true)
    IToatalPayDto getTotalPay(@Param("id") Integer id);

//    @Query(value = "select cart.id as id, cart.quantity as quantity, bottle.image as image, bottle.name as name," +
//            " bottle.price as price, bottle.price*(100 - promotion.discount)/100 as discountMoney " +
//            " from cart " +
//            " join bottle on cart.bottle_id = bottle.id " +
//            " join promotion on bottle.promotion_id = promotion.id " +
//            " join customer on customer.id = cart.customer_id  " +
//            " where cart.is_delete = 0 and cart.is_pay = 0 and cart.quantity>0 and cart.customer_id = :customerId",
//            nativeQuery = true)
//    Page<ICartDto> findPaidCart(@Param("customerId") Integer id);
}
