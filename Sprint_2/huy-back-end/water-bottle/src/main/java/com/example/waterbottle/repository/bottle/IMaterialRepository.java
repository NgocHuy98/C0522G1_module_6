package com.example.waterbottle.repository.bottle;

import com.example.waterbottle.model.bottle.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMaterialRepository extends JpaRepository<Material, Integer> {

}
