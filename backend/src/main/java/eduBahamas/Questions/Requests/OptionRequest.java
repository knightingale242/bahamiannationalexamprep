package eduBahamas.Questions.Requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter@Setter
@AllArgsConstructor
public class OptionRequest {
    private Boolean correct;
    private String questionText;
}
