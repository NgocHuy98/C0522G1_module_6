package com.example.waterbottle.controller;

import com.example.waterbottle.dto.bottle.ICartDto;
import com.example.waterbottle.dto.bottle.IToatalPayDto;
import com.example.waterbottle.model.bottle.Cart;
import com.example.waterbottle.model.customer.Customer;
import com.example.waterbottle.service.bottle.ICartService;
import com.example.waterbottle.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartRestController {

    @Autowired
    private ICartService iCartService;

    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping("/{username}")
    public ResponseEntity<List<ICartDto>> showCartByUser(@PathVariable("username") String username) {
        Customer customer = iCustomerService.findCustomerByUsernames(username);
        List<ICartDto> cart = iCartService.findCartByUser(customer.getId());
        if (cart.isEmpty()) {
            return new ResponseEntity<>(cart, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping("/add/{quantity}&{username}&{bottleId}")
    public ResponseEntity<Cart> addBottleToCart(@PathVariable("quantity") Integer quantity,
                                                @PathVariable("username") String username,
                                                @PathVariable("bottleId") Integer bottleId) {
        Customer customer = iCustomerService.findCustomerByUsernames(username);
        iCartService.addBottleToCart(quantity, customer.getId(), bottleId);
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

    @GetMapping("/paid/{username}")
    public ResponseEntity<Cart> payment(@PathVariable("username") String username) {
        Customer customer = iCustomerService.findCustomerByUsernames(username);
        iCartService.paid(customer.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<Cart> deleteCart(@PathVariable("id") Integer id) {
        iCartService.deleteCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/total-pay/{username}")
    public ResponseEntity<IToatalPayDto> getTotalPay(@PathVariable("username") String username) {
        Customer customer = iCustomerService.findCustomerByUsernames(username);
        IToatalPayDto totalPay = iCartService.getTotalPay(customer.getId());
        return new ResponseEntity<>(totalPay, HttpStatus.OK);
    }

}
