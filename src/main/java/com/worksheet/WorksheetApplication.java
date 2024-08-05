package com.worksheet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.concurrent.CountDownLatch;

@ComponentScan(basePackages = {"com.worksheet"})
@SpringBootApplication
public class WorksheetApplication {
    public static void main(String[] args) {
        SpringApplication.run(WorksheetApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
   /* @Bean
    public CommandLineRunner applicationRunner() {
        return args -> {
            System.out.println("Приложение функционирует, но может показаться, что оно запуталось...");
            CountDownLatch hold = new CountDownLatch(1);
            hold.await();  // Приложение: "Я остаюсь здесь"
        };
    }*/
}

