package eduBahamas.Registration;

import org.springframework.stereotype.Service;

import eduBahamas.Students.student;
import eduBahamas.Students.studentService;
import eduBahamas.Teachers.teacher;
import eduBahamas.Teachers.teacherService;

@Service
public class registrationService {
    private final teacherService teacherService;
    private final studentService studentService;

    public registrationService(studentService studentService, teacherService teacherService){
        this.studentService = studentService;
        this.teacherService = teacherService;
    }

    public Object registerUser(registrationRequest registrationRequest){
        String role = registrationRequest.getRole();
        System.out.println(role);

        if (role.equals("student")){
            return registerStudent(registrationRequest);
        }
        else{
            return registerTeacher(registrationRequest);
        }
    }

    public Object registerStudent(registrationRequest registrationRequest){
        if (studentService.studentExists(registrationRequest.getEmail()) == false){
            student student = new student(registrationRequest.getFirstName(),
                            registrationRequest.getLastName(),
                            registrationRequest.getPassword(),
                            registrationRequest.getEmail(),
                            registrationRequest.getSchool());

            studentService.addNewStudent(student);
            return new registrationResponse(true, "", student);
        }
        return new registrationResponse(false, "This email is already taken", null);
    }

    public Object registerTeacher(registrationRequest registrationRequest){
        if (teacherService.teacherExists(registrationRequest.getEmail()) == false){
            teacher teacher = new teacher(registrationRequest.getFirstName(),
                            registrationRequest.getLastName(),
                            registrationRequest.getPassword(),
                            registrationRequest.getEmail(),
                            registrationRequest.getSchool());

            teacherService.addNewTeacher(teacher);
            return new registrationResponse(true, "", teacher);
        }
        return new registrationResponse(false, "This email is already taken", null);
    }
}
