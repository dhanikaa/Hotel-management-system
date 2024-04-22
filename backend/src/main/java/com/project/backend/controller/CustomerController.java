package com.project.backend.controller;

import com.project.backend.dto.CustomerDTO;
import com.project.backend.entity.Customer;
import com.project.backend.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Customer> signUp(@RequestBody CustomerDTO customerDTO) {
        Customer newCustomer = customerService.signUp(customerDTO);
        return ResponseEntity.ok(newCustomer);
    }
}
