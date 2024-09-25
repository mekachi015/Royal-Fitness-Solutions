package Royal_Fitness_Solutions.demo.authentication;


import Royal_Fitness_Solutions.demo.configuration.JwtService;
import Royal_Fitness_Solutions.demo.repository.UserRepository;
import Royal_Fitness_Solutions.demo.user.Role;
import Royal_Fitness_Solutions.demo.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user);

        // Convert User to UserDetails if necessary
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build();

        var jwtToken = jwtService.generateToken(userDetails, Long.valueOf(user.getId()));
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();

        // Convert User to UserDetails if necessary
        UserDetails userDetails = org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build();

        var jwtToken = jwtService.generateToken(userDetails, Long.valueOf(user.getId()));
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public User getUserById(Integer userId) {
        return repository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
