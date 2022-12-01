package com.example.waterbottlebe.model.bottle;


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

    @ManyToOne
    @JoinColumn(name = "bottle_type_id", referencedColumnName = "id")
    private BottleType bottleType;

    public Bottle() {
    }

    public Bottle(Integer id, String name, boolean isDelete, String volume, String color, BottleType bottleType) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.volume = volume;
        this.color = color;
        this.bottleType = bottleType;
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

    public BottleType getBottleType() {
        return bottleType;
    }

    public void setBottleType(BottleType bottleType) {
        this.bottleType = bottleType;
    }
}
