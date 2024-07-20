package com.worksheet.mappers;

import com.worksheet.DTO.DocumentDto;
import com.worksheet.entities.Document;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class DocumentMapper implements BasicMapper<Document, DocumentDto> {
}
