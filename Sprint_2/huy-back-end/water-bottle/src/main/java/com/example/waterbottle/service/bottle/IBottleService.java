package com.example.waterbottle.service.bottle;

import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBottleService {
    Page<IBottleDtoHome> findAlBottle(String name, Pageable pageable);
}
