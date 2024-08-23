package com.worksheet.services;

import com.worksheet.entities.Document;

import java.util.List;

public interface DocumentService extends RestService<Document> {
    boolean existsByName (String name);
    List<Document> findByNameContaining(String name);
}
