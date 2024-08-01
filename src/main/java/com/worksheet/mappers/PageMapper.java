package com.worksheet.mappers;

import com.worksheet.DTO.PageDto;
import com.worksheet.entities.Page;
import com.worksheet.services.serviceImp.DocumentServiceImp;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper
public abstract class PageMapper implements BasicMapper<Page, PageDto> {
    @Autowired
    protected DocumentServiceImp documentServiceImp;

  @Mapping(target = "documentId", expression = "java(page.getDocument().getId())")
    public abstract PageDto toDto(Page page);

    @Mapping(target = "document", expression = "java(documentServiceImp.getEntityById(pageDto.getDocumentId()))")
    public abstract Page toEntity(PageDto pageDto);
}
