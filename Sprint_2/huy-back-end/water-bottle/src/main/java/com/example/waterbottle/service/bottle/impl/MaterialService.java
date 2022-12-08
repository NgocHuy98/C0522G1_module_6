package com.example.waterbottle.service.bottle.impl;

import com.example.waterbottle.model.bottle.Material;
import com.example.waterbottle.repository.bottle.IMaterialRepository;
import com.example.waterbottle.service.bottle.IMaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService implements IMaterialService {
    @Autowired
    private IMaterialRepository iMaterialRepository;

    @Override
    public List<Material> findAllMaterial() {
        return iMaterialRepository.findAll();
    }
}
