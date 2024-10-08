package com.moore.savetravels.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.moore.savetravels.models.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
	List<Expense> findAll();
	Optional<Expense> findById(Long id);
	Expense save(Expense expense);
	void deleteById(Long id); 
}