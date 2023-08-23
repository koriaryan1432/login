package com.port.portfolio.Repository;

import com.port.portfolio.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String>{
        }