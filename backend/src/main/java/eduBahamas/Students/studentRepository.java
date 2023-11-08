package eduBahamas.Students;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface studentRepository extends MongoRepository<student, ObjectId> {
    public Optional<student> findStudentByEmail(String email);
}
