package com.sazzad.dataShowSB.repository;

import com.sazzad.dataShowSB.Entity.Students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentReportRepository extends JpaRepository<Students, Integer> {
}
