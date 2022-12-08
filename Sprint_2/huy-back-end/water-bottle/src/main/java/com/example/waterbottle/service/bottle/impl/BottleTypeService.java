package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.model.bottle.BottleType;
import com.example.waterbottle.repository.bottle.IBottleTypeRepository;
import com.example.waterbottle.service.bottle.IBottleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BottleTypeService implements IBottleTypeService {
    @Autowired
    private IBottleTypeRepository iBottleTypeRepository;


    @Override
    public List<BottleType> findAllBottleType() {
        return iBottleTypeRepository.findAll();
    }
}
