package com.atlas.atlasdomaine.model;

import javax.persistence.*;

/**
 * @author ALLOUM Abderrahim on 06/12/2020
 * @project atlas-domaine
 */
@Entity
@Table(name = "plan_comptable")
public class PlanComptable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nb")
    private Integer nB;

    @Column(name = "classe")
    private String classe;

    @Column(name = "compte")
    private Double compte;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "sous_compte")
    private String sousCompte;

    @Column(name = "formule_sous_compte")
    private String formuleSousCompte;

    public PlanComptable(Integer nB, String classe, Double compte, String libelle, String sousCompte, String formuleSousCompte) {
        this.nB = nB;
        this.classe = classe;
        this.compte = compte;
        this.libelle = libelle;
        this.sousCompte = sousCompte;
        this.formuleSousCompte = formuleSousCompte;
    }

    public PlanComptable() {
    }

    public Integer getId() {
        return id;
    }

    public Integer getnB() {
        return nB;
    }

    public String getClasse() {
        return classe;
    }

    public Double getCompte() {
        return compte;
    }

    public String getLibelle() {
        return libelle;
    }

    public String getSousCompte() {
        return sousCompte;
    }

    public String getFormuleSousCompte() {
        return formuleSousCompte;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setnB(Integer nB) {
        this.nB = nB;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }

    public void setCompte(Double compte) {
        this.compte = compte;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public void setSousCompte(String sousCompte) {
        this.sousCompte = sousCompte;
    }

    public void setFormuleSousCompte(String formuleSousCompte) {
        this.formuleSousCompte = formuleSousCompte;
    }
}
