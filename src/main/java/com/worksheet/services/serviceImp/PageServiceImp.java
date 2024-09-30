package com.worksheet.services.serviceImp;

import com.worksheet.entities.Document;
import com.worksheet.entities.Page;
import com.worksheet.exceptions.ResourceNotFoundException;
import com.worksheet.repositories.PageRepository;
import com.worksheet.services.PageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
public class PageServiceImp implements PageService {
    @Autowired
    private PageRepository pageRepository;

    @Override
    public Page getEntityById(Long id) {
        return pageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Page with id " + id + " not found"));
    }

    @Override
    public List<Page> getAllEntity() {
        return pageRepository.findAll();
    }

    @Override
    public Page saveEntity(Page page) {
        Page savedPage = pageRepository.save(page);
        page.getDocument().addPage(savedPage);
        log.info("Page  with id " + savedPage.getId() + " saved successfully");
        return savedPage;
    }

    @Override
    public Page updateEntity(Page page) {
        Page savedPage = getEntityById(page.getId());
        if (Objects.isNull(page.getSize())) {
            page.setSize(savedPage.getSize());
        }
        if (Objects.isNull(page.getOrientation())) {
            page.setOrientation(savedPage.getOrientation());
        }
        Page newPage = pageRepository.save(page);
        log.info("Page  with id " + savedPage.getId() + " update successfully");
        return newPage;
    }

    @Override
    public boolean deleteEntity(Long id) {
        Page page = getEntityById(id);
        Document document = page.getDocument();
        document.getPages().remove(page);
        pageRepository.deleteById(id);
        boolean exist = pageRepository.existsById(id);
        if (exist) {
            log.error("Page with id " + id + " was not deleted");
        } else {
            log.info("Page with id " + id + " was deleted successfully");
        }
        return !exist;
    }
}
