package com.worksheet.controllers;

import com.worksheet.mappers.BasicMapper;
import com.worksheet.services.RestService;
import com.worksheet.validator.Marker;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Validated
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
    @Validated({Marker.OnCreate.class})
    public T create(@Valid @RequestBody T dto) {
        return basicMapper.toDto(restService.saveEntity(basicMapper.toEntity(dto)));
    }

    @PutMapping("/{id}")
    @Validated({Marker.OnUpdate.class})
    public T update(@Valid @RequestBody T dto) {
        return basicMapper.toDto(restService.updateEntity(basicMapper.toEntity(dto)));
    }

    @DeleteMapping("/{id}")
    public boolean deleteEntityById(@PathVariable Long id) {
        return restService.deleteEntity(id);
    }
}
