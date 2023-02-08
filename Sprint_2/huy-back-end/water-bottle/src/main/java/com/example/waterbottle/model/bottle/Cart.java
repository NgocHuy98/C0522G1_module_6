package com.example.waterbottle.model.bottle;

import com.example.waterbottle.model.customer.Customer;

import javax.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private int quantity;

    private String dateTime;

    @ManyToOne
    @JoinColumn(name = "bottle_id", referencedColumnName = "id")
    private Bottle bottle;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    private boolean isDelete;

    private boolean isPay;


    public Cart() {
    }

    public Cart(Integer id, int quantity, String dateTime,
                Bottle bottle, Customer customer, boolean isDelete, boolean isPay) {
        this.id = id;
        this.quantity = quantity;
        this.dateTime = dateTime;
        this.bottle = bottle;
        this.customer = customer;
        this.isDelete = isDelete;
        this.isPay = isPay;
    }

    public boolean isPay() {
        return isPay;
    }

    public void setPay(boolean pay) {
        isPay = pay;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Bottle getBottle() {
        return bottle;
    }

    public void setBottle(Bottle bottle) {
        this.bottle = bottle;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
