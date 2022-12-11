package com.example.waterbottle.service.decentralization;


import com.example.waterbottle.model.decentralization.User;

import java.util.List;
import java.util.Optional;


public interface IUserService {
    String existsByUserName(String username);

    Optional<User> findUserByUsername(String username);

    List<User> findAll();

    User findByUsername(String name);

    void updatePassword(User user, String newPassword);


    Optional<User> showUsername(String username);

    void updateUser(User user, String username);

}
