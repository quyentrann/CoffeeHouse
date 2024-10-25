package vn.edu.iuh.fit.coffeehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.coffeehouse.ids.Cart_Id;
import vn.edu.iuh.fit.coffeehouse.models.Cart;
@Repository
public interface CartRepository extends JpaRepository<Cart, Cart_Id> {
}