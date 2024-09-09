package Royal_Fitness_Solutions.demo.authentication;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String cell_Number;
    private String password;
}
