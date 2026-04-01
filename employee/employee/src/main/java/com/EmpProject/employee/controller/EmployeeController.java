package com.EmpProject.employee.controller;


import com.EmpProject.employee.entity.Employee;
import com.EmpProject.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping("/employee")
    private Employee postEmployee(@RequestBody Employee employee){
        return employeeService.postEmployee(employee);
    }

    @GetMapping("/employees")
    private List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @DeleteMapping("/employee/{id}")
    private ResponseEntity<?>  deleteEmployee(@PathVariable long id){
        try{
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with id: "+id+" deleted successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/employee/{id}")
    private ResponseEntity<?> getEmployeeById(@PathVariable long id){
        Employee employee=employeeService.getEmployeeById(id);
        if(employee==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable long id,@RequestBody Employee employee){
        Employee updatedEmployee=employeeService.updateEmployee(id,employee);
        if(updatedEmployee==null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedEmployee);

    }
}
