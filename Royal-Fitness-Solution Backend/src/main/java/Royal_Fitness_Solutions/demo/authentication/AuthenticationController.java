package Royal_Fitness_Solutions.demo.authentication;

import Royal_Fitness_Solutions.demo.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getUserById(
            @PathVariable Integer userId
    ) {
        Royal_Fitness_Solutions.demo.user.User user = service.getUserById(userId);
        return ResponseEntity.ok(user);
    }
}
