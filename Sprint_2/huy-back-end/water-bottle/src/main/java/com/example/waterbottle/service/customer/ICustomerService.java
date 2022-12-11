package com.example.waterbottle.service.customer;

import com.example.waterbottle.dto.customer.ICustomerDto;
import com.example.waterbottle.model.customer.Customer;
import com.example.waterbottle.model.decentralization.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.Optional;

public interface ICustomerService {

    List<Customer> findAll();

    Optional<ICustomerDto> findCustomerByUsername(String username);

    Optional<Customer> findByIdCustomer(Integer id);

    void update(Customer customer, String username);

    void saveCustomerByUser(Customer customer);

    void saveCustomer(Customer customer);

    Page<Customer> searchCustomer(String nameSearch, String addressSearch, String phoneSearch, Pageable pageable);

    void updatePassword(User user, String newPassword);


    Customer findById(Integer id);

    List<Integer> findAllCusId();

    Customer findByUsername(String username);


}