package com.worksheet.validator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ChooseBetweenConstraintValidator implements ConstraintValidator<ChooseBetween, String> {
    private String param1;
    private String param2;

    @Override
    public void initialize(ChooseBetween constraintAnnotation) {
        this.param1 = constraintAnnotation.param1();
        this.param2 = constraintAnnotation.param2();
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return s == null || s.equals(param1) || s.equals(param2);
    }
}
