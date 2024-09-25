package Royal_Fitness_Solutions.demo.repository;

import Royal_Fitness_Solutions.demo.entity.UserQuery;
import Royal_Fitness_Solutions.demo.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserQueryRepo extends JpaRepository<UserQuery, Long > {
}
