package com.worksheet.DTO;

import com.worksheet.validator.ChooseBetween;
import com.worksheet.validator.Marker;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@NoArgsConstructor
public class PageDto {
    @Null(groups = Marker.OnCreate.class)
    @NotNull(groups = Marker.OnUpdate.class)
    private Long id;
    @NotNull
    @Positive
    private Long documentId;
    @ChooseBetween(param1 = "A4",param2 = "A5")
    private String size;
    @ChooseBetween(param1 = "portrait",param2 = "landscape")
    private String orientation;

}
