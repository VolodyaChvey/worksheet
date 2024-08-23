package com.worksheet.repositories;

import com.worksheet.entities.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Long> {
    boolean existsByName (String name);
    List<Document> findByNameIgnoreCaseContaining(String name);
}
