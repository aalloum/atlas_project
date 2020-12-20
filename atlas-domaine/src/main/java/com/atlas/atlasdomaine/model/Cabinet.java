package com.atlas.atlasdomaine.model;

import com.atlas.atlasdomaine.model.jackson.JacksonCustomCabinetDeserializer;
import com.atlas.atlasdomaine.model.jackson.JacksonCustomCabinetSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
@Entity
@Table(name = "cabinets")
//@JsonSerialize(using = JacksonCustomCabinetSerializer.class)
//@JsonDeserialize(using = JacksonCustomCabinetDeserializer.class)
public class Cabinet extends BaseClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nom_cabinet")
    private String nameCabinet;

    @Column(name = "comptables")
    @OneToMany( mappedBy = "cabinet", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comptable> comptables;

    @Column(name = "clients")
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cabinet", fetch = FetchType.EAGER)
    private List<Client> clients;


    public List<Comptable> getComptables() {
        return comptables;
    }

    public List<Client> getClients() {
        return clients;
    }


    public String getNameCabinet() {
        return nameCabinet;
    }

    public void setNameCabinet(String nameCabinet) {
        this.nameCabinet = nameCabinet;
    }

    public void setComptables(List<Comptable> comptables) {
        this.comptables = comptables;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


}
