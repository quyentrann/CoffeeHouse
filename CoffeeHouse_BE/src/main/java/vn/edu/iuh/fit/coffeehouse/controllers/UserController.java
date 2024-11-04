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

    @GetMapping("getUserByPhone")
    public User getUserByPhone(@RequestParam String phone) {
        return userService.getUserByPhone(phone);
    }
    @PostMapping
    public User update(User user) {
        return userService.create(user);
    }

    @PutMapping("forgot/{id}")
    public User update(@PathVariable long id, @RequestBody User newUser) {
        newUser.setId(id);
        return userService.update(id, newUser);
    }

    @DeleteMapping("{id}")
    public Boolean delete(@PathVariable long id) {
        return userService.delete(id);
    }

    @GetMapping("/login")
    public User login(@RequestParam String phone , @RequestParam String password) {
        System.out.println(userService.getUserByPhoneAndPassword(phone,password));
        return userService.getUserByPhoneAndPassword(phone,password);
    }
}
