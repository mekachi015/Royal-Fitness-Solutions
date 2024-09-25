package Royal_Fitness_Solutions.demo.controller;

import Royal_Fitness_Solutions.demo.DTO.AccessDeniedException;
import Royal_Fitness_Solutions.demo.DTO.DatabaseException;
import Royal_Fitness_Solutions.demo.DTO.MailSendException;
import Royal_Fitness_Solutions.demo.DTO.ResourceNotFoundExecption;
import Royal_Fitness_Solutions.demo.entity.UserQuery;
import Royal_Fitness_Solutions.demo.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/query")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping("/submit-query")
    public ResponseEntity<String> submitQuery(@RequestBody UserQuery userQuery){
        queryService.saveQuery(userQuery);
        queryService.sendMail(userQuery);

        return ResponseEntity.ok("query sent");
    }

//    @PostMapping("/submit")
//    public ResponseEntity<String> submitQuery(@RequestBody UserQuery userQuery){
//
//        try{
//            queryService.saveQuery(userQuery);
//            queryService.sendMail(userQuery);
//
//            return ResponseEntity.ok("Query has been submitted successfully, confirmation message sent");
//        } catch (ResourceNotFoundExecption e) {
//            // Return 404 Not Found status if the query or email address is not found
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: Resource not found.");
//        } catch (AccessDeniedException e) {
//            // Return 403 Forbidden status if there's a permission/access issue
//            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Error: Access denied.");
//        } catch (DatabaseException e) {
//            // Return 500 Internal Server Error if there's an issue with saving to the DB
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: Failed to save query to the database.");
//        } catch (MailSendException e) {
//            // Return 500 Internal Server Error if sending the email fails
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: Failed to send confirmation email.");
//        } catch (Exception e) {
//            // Catch all for unexpected errors, return 500 Internal Server Error
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: An unexpected error occurred.");
//        }
//        }
    }

