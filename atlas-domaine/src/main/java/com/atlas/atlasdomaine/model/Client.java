package com.atlas.atlasdomaine.model;

import com.atlas.atlasdomaine.model.jackson.JacksonCustomClientDeserializer;
import com.atlas.atlasdomaine.model.jackson.JacksonCustomClientSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
@Entity
@Table(name = "clients")
@JsonSerialize(using = JacksonCustomClientSerializer.class)
@JsonDeserialize(using = JacksonCustomClientDeserializer.class)
public class Client extends BaseClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "denomination")
    private String denomination;

    @ManyToOne
    @JoinColumn(name = "cabinet_id")
    private Cabinet cabinet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comptable_id")
    private Comptable comptable;

    public Cabinet getCabinet() {
        return cabinet;
    }

    public void setCabinet(Cabinet cabinet) {
        this.cabinet = cabinet;
    }

    public Integer getId() {
        return id;
    }

    public String getDenomination() {
        return denomination;
    }


    public void setId(Integer id) {
        this.id = id;
    }

    public void setDenomination(String denomination) {
        this.denomination = denomination;
    }

    public Comptable getComptable() {
        return comptable;
    }

    public void setComptable(Comptable comptable) {
        this.comptable = comptable;
    }
}
