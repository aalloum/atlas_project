package com.atlas.atlasdomaine.rest;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.model.Comptable;
import com.atlas.atlasdomaine.repository.ClientRepository;
import com.atlas.atlasdomaine.service.CabinetService;
import com.atlas.atlasdomaine.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
@RestController
public class ClientController {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    ClientService clientService;

    @Autowired
    CabinetService cabinetService;


    @GetMapping("/clients")
    public ResponseEntity<Collection<Client>> getListClients(){
        Collection<Client> clients = this.clientService.findAllClients();
        if(clients.isEmpty()){
            return new ResponseEntity<Collection<Client>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Collection<Client>>(clients, HttpStatus.OK);
    }

    @GetMapping("/cabinets/{cabinetId}/clients")
    public List<Client> getClientsByCabinet(@PathVariable("cabinetId") int cabinetId){
        Cabinet cabient = this.cabinetService.findCabinetById(cabinetId);
        return this.clientRepository.findAllByCabinet(cabient);
    }

    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<Client> updateClient(@PathVariable("clientId") int clientId, @RequestBody Client client, BindingResult bindingResult){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (client == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Client>(headers, HttpStatus.BAD_REQUEST);
        }
        Client currentClient = this.clientService.findClientById(clientId);
        if(currentClient == null){
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
        currentClient.setDenomination(client.getDenomination());
        currentClient.setIdentifiantFiscal(client.getIdentifiantFiscal());
        currentClient.setActivitePrincipale(client.getActivitePrincipale());
        currentClient.setFormeJuridique(client.getFormeJuridique());
        currentClient.setRegime(client.getRegime());
        currentClient.setNumeroRegistreCommerce(client.getNumeroRegistreCommerce());
        currentClient.setNumeroCNSS(client.getNumeroCNSS());
        currentClient.setNumeroTaxeProfessionnelle(client.getNumeroTaxeProfessionnelle());
        currentClient.setNumeroICE(client.getNumeroICE());
        currentClient.setTelephone(client.getTelephone());
        currentClient.setFax(client.getFax());
        currentClient.setEmail(client.getEmail());
        currentClient.setRib(client.getRib());
        currentClient.setBanque(client.getBanque());
        currentClient.setAgence(client.getAgence());
        currentClient.setVille(client.getVille());
        currentClient.setCodePostal(client.getCodePostal());
        currentClient.setAdresse(client.getAdresse());

        currentClient.setCabinet(client.getCabinet());
        currentClient.setComptable(client.getComptable());

        this.clientService.saveClient(currentClient);
        return new ResponseEntity<Client>(currentClient, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Client> getClient(@PathVariable("clientId") int clientId){
        Client client = this.clientService.findClientById(clientId);
        if(client == null){
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Client>(client, HttpStatus.OK);
    }

    @RequestMapping(value = "/clients", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Client> addClient(@RequestBody  Client client, BindingResult bindingResult, UriComponentsBuilder ucBuilder){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (client == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Client>(headers, HttpStatus.BAD_REQUEST);
        }
        this.clientService.saveClient(client);
        headers.setLocation(ucBuilder.path("/clients/{id}").buildAndExpand(client.getId()).toUri());
        return new ResponseEntity<Client>(client, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/clients/{clientId}", method = RequestMethod.DELETE, produces = "application/json")
    @Transactional
    public ResponseEntity<Void> deleteClient(@PathVariable("clientId") int clientId){
        Client client = this.clientService.findClientById(clientId);
        if(client == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        this.clientService.deleteClient(client);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
