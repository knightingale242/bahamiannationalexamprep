package eduBahamas.Teachers;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface teacherRepository extends MongoRepository<teacher, ObjectId> {
    public Optional<teacher> findTeacherByEmail(String email);
}
