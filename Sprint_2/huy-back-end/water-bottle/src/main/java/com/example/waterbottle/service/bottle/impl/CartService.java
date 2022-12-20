package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.dto.bottle.ICartDto;
import com.example.waterbottle.model.bottle.Cart;
import com.example.waterbottle.repository.bottle.ICartRepository;
import com.example.waterbottle.service.bottle.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public void addBottleToCart(Integer quantity, Integer customerId, Integer bottleId) {
        Optional<Cart> cart = iCartRepository.getCart(customerId, bottleId);
        if (cart.isPresent()) {
            iCartRepository.setCartByQuantity(cart.get().getQuantity() + quantity, customerId, bottleId);
        } else {
            iCartRepository.addBottleToCart(quantity, bottleId, customerId);
        }
    }

    @Override
    public List<ICartDto> findCartByUser(Integer id) {
        return iCartRepository.findCartByUser(id);
    }


    @Override
    public void decrease(Integer id) {
        iCartRepository.decrease(id);

    }

    @Override
    public void increase(Integer id) {
        iCartRepository.increase(id);

    }

    @Override
    public void paid(Integer id) {
        iCartRepository.paid(id);
    }

    @Override
    public void deleteCart(Integer id) {
        iCartRepository.deleteCart(id);
    }
}
