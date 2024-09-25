package Royal_Fitness_Solutions.demo.serviceImp;

import Royal_Fitness_Solutions.demo.entity.UserQuery;
import Royal_Fitness_Solutions.demo.repository.UserQueryRepo;
import Royal_Fitness_Solutions.demo.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class QueryServiceImp implements QueryService {

    @Autowired
    private UserQueryRepo userQueryRepo;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendMail(UserQuery userQuery) {
        // Mail configuration (build message)
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(userQuery.getEmailAddress());
        message.setSubject("Query Received Confirmation");
        message.setText("Dear " + userQuery.getName() + " " + userQuery.getLastName() + ",\n\n" +
                "Thank you for reaching out. We've received your query:\n\n" +
                userQuery.getQuery() + "\n\nWe'll get back to you shortly.\n\nRegards,\nSupport Team");

        // Send mail
        mailSender.send(message);
    }

    @Override
    public void saveQuery(UserQuery userQuery) {
        userQueryRepo.save(userQuery);
    }

}
