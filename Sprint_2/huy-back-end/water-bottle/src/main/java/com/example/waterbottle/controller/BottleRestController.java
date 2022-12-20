package com.example.waterbottle.controller;

import com.example.waterbottle.dto.bottle.IBottleDto;
import com.example.waterbottle.dto.bottle.IBottleDtoHome;
import com.example.waterbottle.jwt.JwtTokenUtil;
import com.example.waterbottle.payload.request.LoginRequest;
import com.example.waterbottle.payload.request.LoginResponse;
import com.example.waterbottle.service.bottle.IBottleService;
import com.example.waterbottle.service.decentralization.impl.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bottle")
public class BottleRestController {
    @Autowired
    private IBottleService iBottleService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping("/list/home")
    public ResponseEntity<Page<IBottleDtoHome>> getAllBottle(@RequestParam(value = "name", defaultValue = "") String name,
                                                             @RequestParam(value = "startPrice", defaultValue = "0", required = false) int startPrice,
                                                             @RequestParam(value = "endPrice", defaultValue = "0", required = false) int endPrice,
                                                             @PageableDefault(value = 8) Pageable pageable) {
        Page<IBottleDtoHome> homePage;
        if (endPrice == 0) {
            homePage = iBottleService.findAllBottle(name, pageable);
        } else {
            homePage = iBottleService.findAllBottleByPrice(name, startPrice, endPrice, pageable);
        }

        if (homePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homePage, HttpStatus.OK);
    }


    @GetMapping(value = "/detail/{id}")
    public ResponseEntity<Optional<IBottleDto>> getBottle(@PathVariable Integer id) {
        Optional<IBottleDto> bottle = iBottleService.bottleDetail(id);
        if (!bottle.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bottle, HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenUtil.generateJwtToken(loginRequest.getUsername());
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = myUserDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(
                new LoginResponse(
                        jwt,
                        myUserDetails.getUsername(),
                        roles));
    }
}
