package vn.edu.iuh.fit.coffeehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.coffeehouse.models.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}