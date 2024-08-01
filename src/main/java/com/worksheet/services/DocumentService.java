package com.worksheet.services;

import com.worksheet.entities.Document;

public interface DocumentService extends RestService<Document> {
    boolean existsByName (String name);
}
