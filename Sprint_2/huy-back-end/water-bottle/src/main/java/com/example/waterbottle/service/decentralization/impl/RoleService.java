package com.example.waterbottle.service.decentralization.impl;

import com.example.waterbottle.model.decentralization.Role;
import com.example.waterbottle.repository.decentralization.IRoleRepository;
import com.example.waterbottle.service.decentralization.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;


    @Override
    public List<Role> findAllRole() {
        return roleRepository.findAll();
    }

    public List<Role> getAllRoles() {
        return roleRepository.finAllRole();

    }

    @Override
    public void saveCreateGmail(String email) {
        roleRepository.insertRoleGmail(email);
    }

    @Override
    public List<Role> getRoleByUsername(String email) {
        return roleRepository.findRoleByUsername(email);
    }
}