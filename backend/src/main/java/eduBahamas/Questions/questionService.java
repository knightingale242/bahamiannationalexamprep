package eduBahamas.Questions;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import eduBahamas.Questions.Requests.FilterRequest;
import eduBahamas.Questions.Requests.QuestionRequest;

@Service
public class questionService {
    private final questionRepository questionRepository;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public questionService(questionRepository questionRepository, MongoTemplate mongoTemplate){
        this.questionRepository = questionRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public List<questions> getAllQuestions(){
        return questionRepository.findAll();
    }

    public List<questions> filterQuestions(FilterRequest filterRequest){
        System.out.println(filterRequest.getExam());
        System.out.println(filterRequest.getSubject());
        System.out.println(filterRequest.getYear());
        System.out.println(filterRequest.getQuestionType());

        Criteria criteria = new Criteria();

        if(filterRequest.getSubject() != null){
            criteria.and("subject").is(filterRequest.getSubject());
        }

        if(filterRequest.getYear() != null){
            criteria.and("year").is(filterRequest.getYear());
        }

        if(filterRequest.getExam() != null){
            criteria.and("exam").is(filterRequest.getExam());
        }

        if(filterRequest.getQuestionType() != null){
            criteria.and("questionType").is(filterRequest.getQuestionType());
        }

        Query query = new Query(criteria);
        return mongoTemplate.find(query, questions.class);
    }

    public String addNewQuestion(QuestionRequest questionRequest) throws IllegalStateException{
        System.out.println(questionRequest.toString());
        questions newQuestion = new questions(questionRequest.getQuestionText(),
                                        questionRequest.getExam(),
                                        questionRequest.getQuestionType(),
                                        questionRequest.getYear(), 
                                        questionRequest.getOptions(), 
                                        questionRequest.getSubject());
        questionRepository.insert(newQuestion);
        return "Question has been added to the repository";
    }
}
