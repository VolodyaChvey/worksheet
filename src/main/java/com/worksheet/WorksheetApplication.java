package com.worksheet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.worksheet"})
@SpringBootApplication
public class WorksheetApplication {
    public static void main(String[] args) {
        SpringApplication.run(WorksheetApplication.class,args);
    }
}
