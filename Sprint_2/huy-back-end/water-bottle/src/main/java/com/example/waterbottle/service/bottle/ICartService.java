package com.example.waterbottle.service.bottle;

import com.example.waterbottle.dto.bottle.ICartDto;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    void addBottleToCart(Integer quantity, Integer customerId, Integer shoeSizeId);

    List<ICartDto> findCartByUser(Integer id);

    void decrease(Integer id);

    void increase(Integer id);

    void paid(Integer id);

    void deleteCart(Integer id);

}


