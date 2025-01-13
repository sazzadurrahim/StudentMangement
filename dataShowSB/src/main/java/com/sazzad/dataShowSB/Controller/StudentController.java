package com.sazzad.dataShowSB.Controller;

import com.sazzad.dataShowSB.Entity.Students;
import com.sazzad.dataShowSB.service.StudentServiceImpl;
import org.hibernate.boot.jaxb.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = " http://localhost:4200")
@RestController
public class StudentController {
    @Autowired
    StudentServiceImpl studentServiceImpl;
    @CrossOrigin("*")
    @GetMapping("/login/{id}/{name}")
    public Optional<Students> loginSt(@PathVariable int id, @PathVariable String name){
        return studentServiceImpl.studentLogin(id,name);
    }
    @CrossOrigin("*")
    @PostMapping("/save")
    public Students saveStudent(@RequestBody Students students){
       return studentServiceImpl.saveStudents(students);
    }
    @CrossOrigin(origins = "*")
    @GetMapping("show/{page}/{size}")
    public Page<Students> stPaging(
            @RequestParam(defaultValue = "",required = false)String name,
            @RequestParam(defaultValue = "01")int page,
            @RequestParam(defaultValue = "10")int size){
        return studentServiceImpl.StudentsPaging(name,page,size);
    }

    @CrossOrigin("*")
    @GetMapping("/show")
    public List<Students> showAllSt(){
        return studentServiceImpl.findAllSt();
    }
    @CrossOrigin("*")
    @GetMapping("/show/{id}")
    public Optional<Students>showOneSt(@PathVariable int id){
        return studentServiceImpl.findOneSt(id);
    }
    @CrossOrigin("*")
    @PutMapping("update/{id}")
    public Students updateSt(@PathVariable Integer id, @RequestBody Students students){
        students.setId(id);
        return studentServiceImpl.updateStudent(students);
    }

    @CrossOrigin("*")
    @DeleteMapping("delete/{id}")
    public  void deleteSt(@PathVariable Integer id){
        studentServiceImpl.deleteStudent(id);
    }

}
