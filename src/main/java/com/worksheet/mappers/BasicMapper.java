package com.worksheet.mappers;

import java.util.List;

public interface BasicMapper<E, T> {
    T toDto(E e);

    E toEntity(T t);

    List<T> toListDTOs(List<E> entities);

    List<E> toListEntities(List<T> DTOs);
}
