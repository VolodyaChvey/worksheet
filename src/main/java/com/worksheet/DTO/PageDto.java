package com.worksheet.DTO;

import lombok.Data;

@Data
public class PageDto {
    private Long id;
    private Long documentId;
    private String size;
    private String orientation;
}
