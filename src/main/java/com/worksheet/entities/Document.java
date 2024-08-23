package com.worksheet.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "document", cascade = CascadeType.ALL)
    private List<Page> pages = new ArrayList<>();

    public void addPage(Page page) {
        pages.add(page);
        page.setDocument(this);
    }

    public void removePage(Page page) {
        pages.remove(page);
        page.setDocument(null);
    }
}
