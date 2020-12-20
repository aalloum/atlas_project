package com.atlas.atlasdomaine.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

/**
 * @author ALLOUM Abderrahim on 22/11/2020
 * @project atlas-domaine
 */
@MappedSuperclass
public class BaseClient {

    @Column(name = "identifiant_fiscal")
    private Integer identifiantFiscal;

    @Column(name = "activite_principale")
    private String activitePrincipale;

    @Column(name = "forme_juridique")
    private String formeJuridique;

    @Column(name = "regime")
    private String regime;

    @Column(name = "numero_registre_commerce")
    private String numeroRegistreCommerce;

    @Column(name = "numero_cnss")
    private String numeroCNSS;

    @Column(name = "numero_taxe_professionnelle")
    private String numeroTaxeProfessionnelle;

    @Column(name = "numero_ice")
    private String numeroICE;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "fax")
    private String fax;

    @Column(name = "email")
    private String email;

    @Column(name = "rib")
    private String rib;

    @Column(name = "banque")
    private String banque;

    @Column(name = "agence")
    private String agence;

    @Column(name = "ville")
    private String ville;

    @Column(name = "code_postal")
    private String codePostal;

    @Column(name = "adresse")
    private String adresse;


    public Integer getIdentifiantFiscal() {
        return identifiantFiscal;
    }

    public String getActivitePrincipale() {
        return activitePrincipale;
    }

    public String getFormeJuridique() {
        return formeJuridique;
    }

    public String getRegime() {
        return regime;
    }

    public String getNumeroRegistreCommerce() {
        return numeroRegistreCommerce;
    }

    public String getNumeroCNSS() {
        return numeroCNSS;
    }

    public String getNumeroTaxeProfessionnelle() {
        return numeroTaxeProfessionnelle;
    }

    public String getNumeroICE() {
        return numeroICE;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getFax() {
        return fax;
    }

    public String getEmail() {
        return email;
    }

    public String getRib() {
        return rib;
    }

    public String getBanque() {
        return banque;
    }

    public String getAgence() {
        return agence;
    }

    public String getVille() {
        return ville;
    }

    public String getCodePostal() {
        return codePostal;
    }

    public String getAdresse() {
        return adresse;
    }


    public void setIdentifiantFiscal(Integer identifiantFiscal) {
        this.identifiantFiscal = identifiantFiscal;
    }

    public void setActivitePrincipale(String activitePrincipale) {
        this.activitePrincipale = activitePrincipale;
    }

    public void setFormeJuridique(String formeJuridique) {
        this.formeJuridique = formeJuridique;
    }

    public void setRegime(String regime) {
        this.regime = regime;
    }

    public void setNumeroRegistreCommerce(String numeroRegistreCommerce) {
        this.numeroRegistreCommerce = numeroRegistreCommerce;
    }

    public void setNumeroCNSS(String numeroCNSS) {
        this.numeroCNSS = numeroCNSS;
    }

    public void setNumeroTaxeProfessionnelle(String numeroTaxeProfessionnelle) {
        this.numeroTaxeProfessionnelle = numeroTaxeProfessionnelle;
    }

    public void setNumeroICE(String numeroICE) {
        this.numeroICE = numeroICE;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRib(String rib) {
        this.rib = rib;
    }

    public void setBanque(String banque) {
        this.banque = banque;
    }

    public void setAgence(String agence) {
        this.agence = agence;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public void setCodePostal(String codePostal) {
        this.codePostal = codePostal;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}
