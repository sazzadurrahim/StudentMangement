package com.sazzad.dataShowSB.service;

import com.sazzad.dataShowSB.Entity.Students;
import com.sazzad.dataShowSB.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    StudentRepository studentRepository;

    @Override
    public Optional<Students> studentLogin(Integer id, String name){
        return studentRepository.findByIdAndName(id,name);
    }

    @Override
    public Page<Students> StudentsPaging(String name, int page, int size){
        Pageable pageable= PageRequest.of(page,size);
        return studentRepository.findByNameContaining(name, pageable);
    }
    @Override
    public Students saveStudents(Students students){
        return studentRepository.save(students);
    }

    @Override
    public List<Students> findAllSt(){
        return studentRepository.findAll();
    }

    @Override
   public Optional<Students> findOneSt(Integer id){
        return studentRepository.findById(id);
   }

    @Override
   public Students updateStudent( Students students){
        Students students1=studentRepository.findById(students.getId()).get();

        students1.setName(students.getName());
        students1.setEmail(students.getEmail());
        students1.setRound(students.getRound());
        return studentRepository.save(students1);
   }

    @Override
   public void deleteStudent(Integer id){
        studentRepository.deleteById(id);
   }


}
