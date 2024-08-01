package com.worksheet.validator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ChooseBetweenConstraintValidator.class)
public @interface ChooseBetween {
    String param1();
    String param2();
    String message() default "Parameter is invalid";
    Class<?>[]groups() default {};
    Class<? extends Payload>[] payload() default {};
}
