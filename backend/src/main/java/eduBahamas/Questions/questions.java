package eduBahamas.Questions;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class questions {
    @Id
    private ObjectId id;

    private String questionText;
    private String exam;
    private Integer year;
    private String questionType;
    private String subject;
    private List<Object> options;

    public questions(){}

    public questions(String questionText, String exam, String questionType, Integer year, String subject){
        this.questionText = questionText;
        this.exam = exam;
        this.questionType = questionType;
        this.year = year;
        this.subject = subject;
    }

    public questions(String questionText, String exam, String questionType, Integer year, List<Object> options, String subject){
        this.questionText = questionText;
        this.exam = exam;
        this.questionType = questionType;
        this.year = year;
        this.options = options;
        this.subject = subject;
    }

    public ObjectId getId(){
        return id;
    }

    public String getQuestionText(){
        return questionText;
    }

    public String getQuestionType(){
        return questionType;
    }

    public String getexam(){
        return exam;
    } 

    public Integer getYear(){
        return year;
    }
    public void setYear(Integer year){
        this.year = year;
    }

    public List<Object> getOptions(){
        return options;
    }
    
    public String getSubject(){
        return subject;
    }

}
