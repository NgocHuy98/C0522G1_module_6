package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import com.example.waterbottle.repository.bottle.IBottleRepository;
import com.example.waterbottle.service.bottle.IBottleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BottleService implements IBottleService {
    @Autowired
    private IBottleRepository iBottleRepository;

    @Override
    public Page<IBottleDtoHome> findAllBottle(String name,  Pageable pageable) {
        return iBottleRepository.findAllBottle(name, pageable);
    }
    @Override
    public Page<IBottleDtoHome> findAllBottleByPrice(String name,int startPrice,int endPrice,  Pageable pageable) {
        return iBottleRepository.findAllBottleByPrice(name, startPrice, endPrice, pageable);
    }

    @Override
    public Optional<IBottleDto> bottleDetail(Integer id) {
        return iBottleRepository.bottleDetail(id);
    }
}
