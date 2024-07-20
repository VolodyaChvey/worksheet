package com.worksheet.controllers;

import com.worksheet.DTO.DocumentDto;
import com.worksheet.entities.Document;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/documents")
public class DocumentController extends BasicController<Document, DocumentDto> {
}
