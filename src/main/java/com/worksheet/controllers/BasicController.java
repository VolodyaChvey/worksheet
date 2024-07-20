package com.worksheet.controllers;

import com.worksheet.mappers.BasicMapper;
import com.worksheet.services.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class BasicController<E, T> {
    @Autowired
    protected RestService<E> restService;
    @Autowired
    protected BasicMapper<E, T> basicMapper;

    @GetMapping("/{id}")
    public T getEntityById(@PathVariable Long id) {
        return basicMapper.toDto(restService.getEntityById(id));
    }

    @GetMapping
    public List<T> getAllEntity() {
        return basicMapper.toListDTOs(restService.getAllEntity());
    }

    @PostMapping
    public T saveEntity(@RequestBody T dto) {
        return basicMapper.toDto(restService.saveEntity(basicMapper.toEntity(dto)));
    }

    @PutMapping("/{id}")
    public T updateEntity(@RequestBody T dto) {
        return basicMapper.toDto(restService.saveEntity(basicMapper.toEntity(dto)));
    }

    @DeleteMapping("/{id}")
    public boolean deleteEntityById(@PathVariable Long id) {
        return restService.deleteEntity(id);
    }
}
