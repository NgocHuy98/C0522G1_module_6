package com.example.waterbottle.service.customer;

import com.example.waterbottle.model.customer.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAllCustomerType();

}