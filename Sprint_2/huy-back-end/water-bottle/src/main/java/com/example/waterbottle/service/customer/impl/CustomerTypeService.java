package com.example.waterbottle.service.customer.impl;

import com.example.waterbottle.model.customer.CustomerType;
import com.example.waterbottle.repository.customer.ICustomerTypeRepository;
import com.example.waterbottle.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {

    @Autowired
    private ICustomerTypeRepository icustomerTypeRepository;

    @Override
    public List<CustomerType> findAllCustomerType() {
        return icustomerTypeRepository.findAll();
    }
}