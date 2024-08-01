package com.worksheet.mappers;

import com.worksheet.DTO.DocumentDto;
import com.worksheet.entities.Document;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = {PageMapper.class})
public abstract class DocumentMapper implements BasicMapper<Document, DocumentDto> {
    @Mapping(target = "pages", source = "pageDtoList")
    public abstract Document toEntity(DocumentDto documentDto);

    @Mapping(target = "pageDtoList", source = "pages")
    public abstract DocumentDto toDto(Document document);
}
