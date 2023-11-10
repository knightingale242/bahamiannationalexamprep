package eduBahamas.Questions;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eduBahamas.Questions.Requests.FilterRequest;
import eduBahamas.Questions.Requests.QuestionRequest;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping(path = "api/v1/question")
@CrossOrigin
public class questionController {
    private final questionService questionService;

    @Autowired
    public questionController(questionService questionService){
        this.questionService = questionService;
    }

    @GetMapping
    public List<questions> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @PostMapping
    public List<questions> filterQuestion(@RequestBody FilterRequest filterRequest){
        return questionService.filterQuestions(filterRequest);
    }

    @PostMapping(path = "new")
    public String addNewQuestion(@RequestBody QuestionRequest questionRequest){
        return questionService.addNewQuestion(questionRequest);
    }
}
