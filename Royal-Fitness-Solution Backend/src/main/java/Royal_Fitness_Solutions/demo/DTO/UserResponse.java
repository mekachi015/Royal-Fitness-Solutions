package Royal_Fitness_Solutions.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String cellNumber;
}