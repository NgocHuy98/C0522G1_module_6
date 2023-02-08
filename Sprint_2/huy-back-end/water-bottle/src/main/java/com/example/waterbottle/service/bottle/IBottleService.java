package com.example.waterbottle.service.bottle;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBottleService {


    Page<IBottleDtoHome> findAllBottle(String name, Pageable pageable);

    Page<IBottleDtoHome> findAllBottleByPrice(String name, int startPrice, int endPrice, Pageable pageable);

    Optional<IBottleDto> bottleDetail(Integer id);


    Optional<Bottle> findBottleById(Integer id);

    void saveBottle(Bottle bottle);

    void deleteBottle(Integer id);
}
