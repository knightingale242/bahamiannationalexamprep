package eduBahamas.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(path = "api/v1/login")
@CrossOrigin
public class loginController {
    private final loginService loginService;

    @Autowired
    public loginController(loginService loginService){
        this.loginService = loginService;
    }

    @PostMapping
    public Object loginUser(@RequestBody loginRequest userLogin){
        return loginService.validateUser(userLogin);
    }
}
