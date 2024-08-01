package com.worksheet.controllers;

import com.worksheet.DTO.DocumentDto;
import com.worksheet.entities.Document;
import com.worksheet.services.DocumentService;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/documents")
public class DocumentController extends BasicController<Document, DocumentDto> {
    @Autowired
    private DocumentService documentService;

    @GetMapping("/exists/{name}")
    public boolean existsByName(@PathVariable String name) {
        return documentService.existsByName(name);
    }
}
