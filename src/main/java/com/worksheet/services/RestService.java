package com.worksheet.services;

import java.util.List;

public interface RestService<E> {
    E getEntityById(Long id);
    List<E> getAllEntity();
    E saveEntity(E entity);
    E updateEntity(E entity);
    boolean deleteEntity(Long id);
}
