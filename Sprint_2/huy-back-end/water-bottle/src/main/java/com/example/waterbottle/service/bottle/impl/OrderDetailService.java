package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.repository.bottle.IOrderDetailRepository;
import com.example.waterbottle.service.bottle.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
}
