package eduBahamas.Registration;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(path = "api/v1/registration")
@CrossOrigin
public class registrationController {
    private final registrationService registrationService;

    public registrationController(registrationService registrationService){
        this.registrationService = registrationService;
    }

    @PostMapping
    public Object registerNewUser(@RequestBody registrationRequest registrationRequest){
        return registrationService.registerUser(registrationRequest);
    }


}
