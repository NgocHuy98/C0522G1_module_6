package com.example.waterbottle.controller;

import com.example.waterbottle.jwt.JwtTokenUtil;
import com.example.waterbottle.model.customer.Customer;
import com.example.waterbottle.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/customer")
public class CustomerRestController {

    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
//
//    @GetMapping("/find-username")
//    public ResponseEntity<Customer> getCustomerByUsername(HttpServletRequest request) {
//        String headerAuth = request.getHeader("Authorization");
//        String username = jwtTokenUtil.getUsernameFromJwtToken(headerAuth.substring(7));
//        System.out.println(username);
//
//        Customer customer = iCustomerService.findCustomerByUsernames(username);
//        return new ResponseEntity<>(customer, HttpStatus.OK);
//    }
}
