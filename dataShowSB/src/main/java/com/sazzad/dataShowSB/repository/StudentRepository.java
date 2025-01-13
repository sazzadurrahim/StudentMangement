package com.sazzad.dataShowSB.repository;

import com.sazzad.dataShowSB.Entity.Students;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Students, Integer> {
  Page<Students>findByNameContaining(String name, Pageable pageable);
   Optional<Students> findByIdAndName(Integer id, String name);
}
