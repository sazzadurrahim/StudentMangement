package com.sazzad.dataShowSB.Controller;

import com.sazzad.dataShowSB.service.StudentReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
public class StudentReportController {
    @Autowired
    StudentReportService studentReportService;


    @GetMapping(value = "/reports/{format}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public Map<String,String> exportReport(@PathVariable String format) {
        String st = studentReportService.exportReport(format);
        Map<String, String> map = new HashMap<>();
        map.put("key1", st);
        return map;
    }
}
