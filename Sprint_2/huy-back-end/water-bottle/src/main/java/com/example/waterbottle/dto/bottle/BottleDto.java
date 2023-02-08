package com.example.waterbottle.dto.bottle;

import com.example.waterbottle.model.Promotion.Promotion;
import com.example.waterbottle.model.bottle.BottleType;
import com.example.waterbottle.model.bottle.Material;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class BottleDto {
    private Integer id;

    private String name;

    private boolean isDelete;

    private String volume;

    private String color;

    private double price;

    private String image;

    private String description;

    private int quantity;

    private Material material;

    private BottleType bottleType;

    private Promotion promotion;

    public BottleDto() {
    }

    public BottleDto(Integer id, String name, boolean isDelete, String volume, String color, double price,
                     String image, String description, int quantity, Material material, BottleType bottleType,
                     Promotion promotion) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.volume = volume;
        this.color = color;
        this.price = price;
        this.image = image;
        this.description = description;
        this.quantity = quantity;
        this.material = material;
        this.bottleType = bottleType;
        this.promotion = promotion;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public BottleType getBottleType() {
        return bottleType;
    }

    public void setBottleType(BottleType bottleType) {
        this.bottleType = bottleType;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }


}
