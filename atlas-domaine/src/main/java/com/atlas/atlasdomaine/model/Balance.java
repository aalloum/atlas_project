package com.atlas.atlasdomaine.model;

import javax.persistence.*;

/**
 * @author ALLOUM Abderrahim on 13/12/2020
 * @project atlas-domaine
 */
@Entity
@Table(name = "balance")
public class Balance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Compte")
    private Double compte;

    @Column(name = "Intitule_Compte")
    private String intituleCompte;

    @Column(name = "Solde_Initial_Debit")
    private Double soldeInitialDebit;

    @Column(name = "Solde_Initial_Credit")
    private Double soldeInitialCredit;

    @Column(name = "Mouvement_Debit")
    private Double mouvementDebit;

    @Column(name = "Mouvement_Credit")
    private Double mouvementCredit;

    @Column(name = "Solde_Debit")
    private Double soldeDebit;

    @Column(name = "Solde_Credit")
    private Double soldeCredit;

    public Balance() {
    }

    public Balance(Double compte, String intituleCompte, Double soldeInitialDebit, Double soldeInitialCredit, Double mouvementDebit, Double mouvementCredit, Double soldeDebit, Double soldeCredit) {
        this.compte = compte;
        this.intituleCompte = intituleCompte;
        this.soldeInitialDebit = soldeInitialDebit;
        this.soldeInitialCredit = soldeInitialCredit;
        this.mouvementDebit = mouvementDebit;
        this.mouvementCredit = mouvementCredit;
        this.soldeDebit = soldeDebit;
        this.soldeCredit = soldeCredit;
    }

    public Integer getId() {
        return id;
    }

    public Double getCompte() {
        return compte;
    }

    public String getIntituleCompte() {
        return intituleCompte;
    }

    public Double getSoldeInitialDebit() {
        return soldeInitialDebit;
    }

    public Double getSoldeInitialCredit() {
        return soldeInitialCredit;
    }

    public Double getMouvementDebit() {
        return mouvementDebit;
    }

    public Double getMouvementCredit() {
        return mouvementCredit;
    }

    public Double getSoldeDebit() {
        return soldeDebit;
    }

    public Double getSoldeCredit() {
        return soldeCredit;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCompte(Double compte) {
        this.compte = compte;
    }

    public void setIntituleCompte(String intituleCompte) {
        this.intituleCompte = intituleCompte;
    }

    public void setSoldeInitialDebit(Double soldeInitialDebit) {
        this.soldeInitialDebit = soldeInitialDebit;
    }

    public void setSoldeInitialCredit(Double soldeInitialCredit) {
        this.soldeInitialCredit = soldeInitialCredit;
    }

    public void setMouvementDebit(Double mouvementDebit) {
        this.mouvementDebit = mouvementDebit;
    }

    public void setMouvementCredit(Double mouvementCredit) {
        this.mouvementCredit = mouvementCredit;
    }

    public void setSoldeDebit(Double soldeDebit) {
        this.soldeDebit = soldeDebit;
    }

    public void setSoldeCredit(Double soldeCredit) {
        this.soldeCredit = soldeCredit;
    }
}
