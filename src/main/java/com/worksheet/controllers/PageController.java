package com.worksheet.controllers;

import com.worksheet.DTO.PageDto;
import com.worksheet.entities.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pages")
public class PageController extends BasicController<Page, PageDto> {
}
