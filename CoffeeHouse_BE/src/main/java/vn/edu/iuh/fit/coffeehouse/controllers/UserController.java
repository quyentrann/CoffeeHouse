package vn.edu.iuh.fit.coffeehouse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.coffeehouse.models.User;
import vn.edu.iuh.fit.coffeehouse.services.UserService;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserByID(id);
    }

        @PostMapping
    public User create(@RequestBody User product) {
        return userService.create(product);
    }
    @PutMapping("{id}")
    public User update(@PathVariable long id, @RequestBody User product) {
        return userService.update(id, product);
    }

    @DeleteMapping("{id}")
    public Boolean delete(@PathVariable long id) {
        return userService.delete(id);
    }
}
