package com.EmpProject.employee.service;


import com.EmpProject.employee.entity.Employee;
import com.EmpProject.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
  private final EmployeeRepository employeeRepository;


    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public void deleteEmployee(long id){
        if(!employeeRepository.existsById(id)){
            throw new EntityNotFoundException("emp by id: "+id+" not found");
        }
        employeeRepository.deleteById(id);
    }

    public Employee getEmployeeById(long id){
      return employeeRepository.findById(id).orElse(null);
    }

    public Employee updateEmployee(long id,Employee employee){
        Optional<Employee> optionalEmployee=employeeRepository.findById(id);
        if(optionalEmployee.isPresent()){
            Employee existingEmployee=optionalEmployee.get();
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setName(employee.getName());
            existingEmployee.setDepartment(employee.getDepartment());

            return employeeRepository.save(existingEmployee);
        }
        return null;
    }
}