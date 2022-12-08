package com.example.waterbottle.controller;

import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.service.bottle.IBottleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bottle")
public class BottleRestController {
    @Autowired
    private IBottleService iBottleService;

    @GetMapping("/list/home")
    public ResponseEntity<Page<IBottleDtoHome>> getAllBottle(@RequestParam(value = "name", defaultValue = "") String name,
                                                            @PageableDefault Pageable pageable) {
        Page<IBottleDtoHome> homePage = iBottleService.findAlBottle(name, pageable);
        if (homePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homePage, HttpStatus.OK);
    }


}
