package Royal_Fitness_Solutions.demo.service;

import Royal_Fitness_Solutions.demo.entity.UserQuery;

public interface QueryService {

    //a method that is meant to send mail to the user and I
    void sendMail(UserQuery userQuery);

    //a method that saves the query in the database
    void saveQuery(UserQuery userQuery);
}
