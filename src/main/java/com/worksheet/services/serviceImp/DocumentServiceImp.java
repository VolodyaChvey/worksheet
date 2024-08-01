package com.worksheet.services.serviceImp;

import com.worksheet.entities.Document;
import com.worksheet.exceptions.ResourceNotFoundException;
import com.worksheet.repositories.DocumentRepository;
import com.worksheet.services.DocumentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class DocumentServiceImp implements DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    @Override
    public Document getEntityById(Long id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Document with id " + id + " not found"));
    }

    @Override
    public List<Document> getAllEntity() {
        return documentRepository.findAll();
    }

    @Override
    public Document saveEntity(Document document) {
        Document saveDocument = documentRepository.save(document);
        log.info("Document  " + saveDocument.getName() + " saved successfully");
        return saveDocument;
    }

    @Override
    public Document updateEntity(Document document) {
        Document savedDocument = getEntityById(document.getId());
        if (document.getPages().isEmpty()) {
            document.setPages(savedDocument.getPages());
        }
        Document newDocument = documentRepository.save(document);
        log.info("Document with id " + newDocument.getId() + " update successfully");
        return newDocument;
    }

    @Override
    public boolean deleteEntity(Long id) {
        documentRepository.deleteById(id);
        boolean exists = documentRepository.existsById(id);
        if (exists) {
            log.error("Document with id " + id + " was not deleted");
        } else {
            log.info("Document with id " + id + " was deleted successfully");
        }
        return !exists;
    }

    @Override
    public boolean existsByName(String name) {
        return documentRepository.existsByName(name);
    }
}
