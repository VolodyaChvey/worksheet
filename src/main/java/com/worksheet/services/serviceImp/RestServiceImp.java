package com.worksheet.services.serviceImp;

import com.worksheet.exceptions.ResourceNotFoundException;
import com.worksheet.services.RestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Slf4j
public abstract class RestServiceImp<E> implements RestService<E> {
    @Autowired
    protected JpaRepository<E, Long> jpaRepository;

    @Override
    public E getEntityById(Long id) {
        return jpaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entity with id " + id + " not found"));
    }

    @Override
    public List<E> getAllEntity() {
        return jpaRepository.findAll();
    }

    @Override
    public E saveEntity(E entity) {
        E e = jpaRepository.save(entity);
        log.error("Entity " + e.getClass() + " was saved successfully");
        return e;
    }

    @Override
    public E updateEntity(E entity) {
        E e = jpaRepository.save(entity);
        log.error("Entity " + e.getClass() + " was updated successfully");
        return e;
    }

    @Override
    public boolean deleteEntity(Long id) {
        jpaRepository.deleteById(id);
        boolean exist = jpaRepository.existsById(id);
        if (exist) {
            log.error("Entity with id " + id + " was not deleted");
        } else {
            log.error("Entity with id " + id + " was deleted successfully");
        }
        return !exist;
    }
}
