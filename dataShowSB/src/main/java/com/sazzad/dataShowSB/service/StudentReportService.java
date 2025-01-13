package com.sazzad.dataShowSB.service;

import com.sazzad.dataShowSB.Entity.Students;
import com.sazzad.dataShowSB.repository.StudentReportRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;

@Service
public class StudentReportService {
    @Autowired
    StudentReportRepository studentRepository;

    public String exportReport(String format) {
        String reportsPath = "E:\\Sazzad 1282062\\000 Project\\dataShow Project\\dataShow\\public\\reports\\";

        String fileName = "";
        try {
            List<Students> stList = studentRepository.findAll();
            JasperReport jasperReport = JasperCompileManager.compileReport(ResourceUtils
                    .getFile("classpath:Cherry.jrxml").getAbsolutePath());
            HashMap<String, Object> map=new HashMap<>();
            JRBeanCollectionDataSource beanCollectionDataSource= new JRBeanCollectionDataSource(stList);
            JasperPrint jasperPrint= JasperFillManager.fillReport(jasperReport,map,beanCollectionDataSource);
            if(format.equalsIgnoreCase("html")){
                JasperExportManager.exportReportToHtmlFile(jasperPrint,reportsPath+"studentsReport.html");
                fileName="studentsReport.html";
            } else if(format.equalsIgnoreCase("pdf")){
                JasperExportManager.exportReportToPdfFile(jasperPrint,reportsPath+"studentsReport.pdf");
                fileName="studentsReport.pdf";
            }
        } catch (JRException | FileNotFoundException ex) {
            ex.printStackTrace();
        }
        return fileName;
    }
}
