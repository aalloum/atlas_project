package com.atlas.atlasdomaine.rest;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.model.Comptable;
import com.atlas.atlasdomaine.repository.ClientRepository;
import com.atlas.atlasdomaine.repository.ComptableRepository;
import com.atlas.atlasdomaine.service.CabinetService;
import com.atlas.atlasdomaine.service.ComptableService;
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
import java.util.Comparator;
import java.util.List;

/**
 * @author ALLOUM Abderrahim on 08/11/2020
 * @project atlas-domaine
 */
@RestController
public class ComptableController {

    @Autowired
    ComptableRepository comptableRepository;

    @Autowired
    ComptableService comptableService;

    @Autowired
    CabinetService cabinetService;

    @GetMapping("/comptables")
    public ResponseEntity<Collection<Comptable>> getListComptables(){
        Collection<Comptable> comptables = this.comptableService.findAllComptables();
        if(comptables.isEmpty()){
            return new ResponseEntity<Collection<Comptable>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Collection<Comptable>>(comptables, HttpStatus.OK);
    }

    @GetMapping("/cabinets/{cabinetId}/comptables")
    public List<Comptable> getComptablesByCabinet(@PathVariable("cabinetId") int cabinetId){
        Cabinet cabient = this.cabinetService.findCabinetById(cabinetId);
        return this.comptableRepository.findAllByCabinet(cabient);
    }

    @RequestMapping(value = "/comptables/{comptableId}", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<Comptable> updateComptable(@PathVariable("comptableId") int comptableId, @RequestBody Comptable comptable, BindingResult bindingResult){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (comptable == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Comptable>(headers, HttpStatus.BAD_REQUEST);
        }
        Comptable currentComptable = this.comptableService.findComptableById(comptableId);
        if(currentComptable == null){
            return new ResponseEntity<Comptable>(HttpStatus.NOT_FOUND);
        }
        currentComptable.setFirstName(comptable.getFirstName());
        currentComptable.setLastName(comptable.getLastName());
        currentComptable.setMatricule(comptable.getMatricule());
        currentComptable.setActived(comptable.isActived());
        currentComptable.setCabinet(comptable.getCabinet());
        this.comptableService.saveComptable(currentComptable);
        return new ResponseEntity<Comptable>(currentComptable, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/comptables/{comptableId}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Comptable> getComptable(@PathVariable("comptableId") int comptableId){
        Comptable comptable = this.comptableService.findComptableById(comptableId);
        if(comptable == null){
            return new ResponseEntity<Comptable>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Comptable>(comptable, HttpStatus.OK);
    }

    @RequestMapping(value = "/comptables", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Comptable> addPComptable(@RequestBody  Comptable comptable, BindingResult bindingResult, UriComponentsBuilder ucBuilder){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (comptable == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Comptable>(headers, HttpStatus.BAD_REQUEST);
        }
        this.comptableService.saveComptable(comptable);
        headers.setLocation(ucBuilder.path("/comptables/{id}").buildAndExpand(comptable.getId()).toUri());
        return new ResponseEntity<Comptable>(comptable, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/comptables/{comptableId}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<Void> deleteComptable(@PathVariable("comptableId") int comptableId){
        Comptable comptable = this.comptableService.findComptableById(comptableId);
        System.out.println(comptable.getCabinet().getIdentifiantFiscal());
        if(comptable == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        this.comptableService.deleteComptable(comptable);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
