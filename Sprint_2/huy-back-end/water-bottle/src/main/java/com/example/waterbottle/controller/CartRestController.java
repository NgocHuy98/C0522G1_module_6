package com.example.waterbottle.controller;

import com.example.waterbottle.dto.bottle.ICartDto;
import com.example.waterbottle.model.bottle.Cart;
import com.example.waterbottle.service.bottle.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartRestController {

    @Autowired
    private ICartService iCartService;

    @GetMapping("/{id}")
    public ResponseEntity<List<ICartDto>> showCartByUser(@PathVariable("id") Integer id) {
        List<ICartDto> cart = iCartService.findCartByUser(id);
        if(cart.isEmpty()){
            return new ResponseEntity<>(cart, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping("/add/{quantity}&{customerId}&{bottleId}")
    public ResponseEntity<Cart> addBottleToCart(@PathVariable("quantity") Integer quantity,
                                                @PathVariable("customerId") Integer customerId,
                                                @PathVariable("bottleId") Integer bottleId) {
        iCartService.addBottleToCart(quantity, customerId, bottleId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/increase/{id}")
    public ResponseEntity<Cart> increase(@PathVariable("id") Integer id) {
        iCartService.increase(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/decrease/{id}")
    public ResponseEntity<Cart> decrease(@PathVariable("id") Integer id) {
        iCartService.decrease(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/paid/{id}")
    public ResponseEntity<Cart> payment(@PathVariable("id") Integer id) {
        iCartService.paid(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Cart> deleteCart(@PathVariable("id") Integer id) {
        iCartService.deleteCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
