package com.example.waterbottle.controller;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.model.bottle.Bottle;
import com.example.waterbottle.service.bottle.IBottleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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


    @GetMapping(value = "/detail/{id}")
    public ResponseEntity<Optional<IBottleDto>> getMovieDetail(@PathVariable Integer id) {
        Optional<IBottleDto> bottle = iBottleService.bottleDetail(id);
        if (!bottle.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bottle, HttpStatus.OK);
    }
}
