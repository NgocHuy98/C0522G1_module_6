package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.model.bottle.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

}
