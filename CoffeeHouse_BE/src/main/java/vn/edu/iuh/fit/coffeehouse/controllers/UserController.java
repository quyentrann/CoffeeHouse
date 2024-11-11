package vn.edu.iuh.fit.coffeehouse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.coffeehouse.models.User;
import vn.edu.iuh.fit.coffeehouse.services.UserService;

import java.util.List;
import java.util.Map;

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
    public User update(User user) {
        return userService.create(user);
    }
    @GetMapping("getUserByPhone")
    public User getUserByPhone(@RequestParam String phone) {
        return userService.getUserByPhone(phone);
    }

    @PutMapping("forgot/{id}")
    public User updatePassword(@PathVariable long id, @RequestBody Map<String, String> requestBody) {
        String newPassword = requestBody.get("password");
        User user = userService.getUserByID(id);
        if (user == null) {
            throw new RuntimeException("User not found with id " + id);
        }
        user.setPassword(newPassword);
        return userService.update(id, user);
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
