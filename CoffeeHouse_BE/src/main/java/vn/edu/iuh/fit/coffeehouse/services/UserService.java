package vn.edu.iuh.fit.coffeehouse.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.edu.iuh.fit.coffeehouse.models.User;
import vn.edu.iuh.fit.coffeehouse.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Transactional
    public User getUserByID(long idUser) {
        return userRepository.findById(idUser).orElse(null);
    }

    @Transactional
    public User update(long id , User product) {
        product.setId(id);
        return userRepository.save(product);
    }

    @Transactional
    public User create(User product) {
        return userRepository.save(product);
    }

    @Transactional
    public Boolean delete(long idUser) {
        try {
            userRepository.deleteById(idUser);
            return true;
        } catch (Exception exception) {
        }
        return false;
    }

    public User getUserByPhoneAndPassword(String phone, String password){
        return userRepository.getUserByPhoneAndPassword(phone,password);
    }

    public User getUserByPhone(String phone){
        return userRepository.getUserByPhone(phone);
    }
}
