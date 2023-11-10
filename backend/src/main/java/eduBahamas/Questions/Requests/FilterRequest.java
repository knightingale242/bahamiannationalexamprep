package eduBahamas.Questions.Requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FilterRequest {
    private String subject;
    private Integer year;
    private String exam;
    private String questionType;
    private Integer currentPage;
    private Integer entityAmount;
}
