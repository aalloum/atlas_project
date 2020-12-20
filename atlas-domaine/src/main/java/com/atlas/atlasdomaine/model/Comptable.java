package com.atlas.atlasdomaine.model;

import com.atlas.atlasdomaine.model.jackson.JacksonCustomComptableDeserializer;
import com.atlas.atlasdomaine.model.jackson.JacksonCustomComptableSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

/**
 * @author ALLOUM Abderrahim on 08/11/2020
 * @project atlas-domaine
 */
@Entity
@Table(name = "comptables")
@JsonSerialize(using = JacksonCustomComptableSerializer.class)
@JsonDeserialize(using = JacksonCustomComptableDeserializer.class)
public class Comptable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "prenom")
    private String firstName;

    @Column(name = "nom")
    private String lastName;

    @Column(name = "matricule")
    private String matricule;

    @Column(name = "actived")
    private boolean actived;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cabinet_id", nullable = false)
    private Cabinet cabinet;

    @Column(name = "clients")
    @OneToMany( mappedBy = "comptable", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Client> clients;

    public Cabinet getCabinet() {
        return cabinet;
    }

    public void setCabinet(Cabinet cabinet) {
        this.cabinet = cabinet;
    }

    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMatricule() {
        return matricule;
    }

    public boolean isActived() {
        return actived;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public void setActived(boolean actived) {
        this.actived = actived;
    }

    public Comptable() {
    }

    public Comptable(String firstName, String lastName, String matricule, boolean actived) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.matricule = matricule;
        this.actived = actived;
    }

    public Set<Client> getClients() {
        return clients;
    }

    public void setClients(Set<Client> clients) {
        this.clients = clients;
    }
}
