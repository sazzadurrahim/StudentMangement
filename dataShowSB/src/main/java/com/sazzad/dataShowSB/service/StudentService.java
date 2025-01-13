package com.sazzad.dataShowSB.service;

import com.sazzad.dataShowSB.Entity.Students;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    public Optional<Students> studentLogin(Integer id, String name);

    public Students saveStudents(Students students);

    public List<Students> findAllSt();

    public Page<Students> StudentsPaging(String name, int page, int size);

    public Optional<Students> findOneSt(Integer id);

    public Students updateStudent( Students students);

    public void deleteStudent(Integer id);
}
