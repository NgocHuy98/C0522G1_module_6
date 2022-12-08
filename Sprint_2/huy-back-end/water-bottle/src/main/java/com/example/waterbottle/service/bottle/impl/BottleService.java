package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.repository.bottle.IBottleRepository;
import com.example.waterbottle.service.bottle.IBottleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BottleService implements IBottleService {
    @Autowired
    private IBottleRepository iBottleRepository;

    @Override
    public Page<IBottleDtoHome> findAlBottle(String name, Pageable pageable) {
        return iBottleRepository.findAllBottle(name, pageable);
    }
}
