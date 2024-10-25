package vn.edu.iuh.fit.coffeehouse;

import net.datafaker.Faker;
import org.checkerframework.checker.units.qual.C;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import vn.edu.iuh.fit.coffeehouse.models.*;
import vn.edu.iuh.fit.coffeehouse.repositories.OrderDetailRepository;
import vn.edu.iuh.fit.coffeehouse.repositories.OrderRepository;
import vn.edu.iuh.fit.coffeehouse.services.ProductService;
import vn.edu.iuh.fit.coffeehouse.services.UserService;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class CoffeeHouseApplicationTests {
    @Autowired
    private UserService userService;
    @Test
    void test() {
        Faker faker = new Faker();
        for (int i = 0; i < 10; i++) {
            String phone = "0" + faker.number().digits(10);
            User user = User.builder()
                    .fullName(faker.name().fullName())
                    .avatar(faker.internet().image())
                    .phone(phone)
                    .build();
            userService.create(user);
        }
    }

}
