package eduBahamas.Questions.Requests;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter@Setter
@AllArgsConstructor
@ToString
public class QuestionRequest {
    private String questionText;
    private String exam;
    private String questionType;
    private Integer year;
    private String subject;
    private List<Object> options;
}
