package com.example.waterbottle.service.decentralization;


import com.example.waterbottle.model.decentralization.Role;

import java.util.List;

public interface IRoleService {

    List<Role> findAllRole();

    List<Role> getAllRoles();

    void saveCreateGmail(String email);

    List<Role> getRoleByUsername(String email);



}
