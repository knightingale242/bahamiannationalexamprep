package eduBahamas.Questions;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface questionRepository extends MongoRepository<questions, ObjectId> {

    
}
