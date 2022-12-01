package com.example.waterbottle.model.bottle;


import com.example.waterbottle.model.customer.Customer;

import javax.persistence.*;

@Entity
public class Bottle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private boolean isDelete;
    private String volume;
    private String color;
    private double price;

    @ManyToOne
    @JoinColumn(name = "bottle_type_id", referencedColumnName = "id")
    private BottleType bottleType;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    public Bottle() {
    }

    public Bottle(Integer id, String name, boolean isDelete, String volume, String color, double price,
                  BottleType bottleType, Customer customer) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.volume = volume;
        this.color = color;
        this.price = price;
        this.bottleType = bottleType;
        this.customer = customer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public BottleType getBottleType() {
        return bottleType;
    }

    public void setBottleType(BottleType bottleType) {
        this.bottleType = bottleType;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
