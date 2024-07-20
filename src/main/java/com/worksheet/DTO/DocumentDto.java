package com.worksheet.DTO;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DocumentDto {
    private Long id;
    private String name;
    private List<PageDto> pageDtoList = new ArrayList<>();
}
