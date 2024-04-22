package com.project.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Customer")
class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cusID;
    private String cusName;
    private String cusTown;
    private String cusTelephone;
}
