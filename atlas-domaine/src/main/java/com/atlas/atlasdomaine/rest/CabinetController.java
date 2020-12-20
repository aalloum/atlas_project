package com.atlas.atlasdomaine.rest;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.repository.CabinetRepository;
import com.atlas.atlasdomaine.service.CabinetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.Collection;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
@RestController
public class CabinetController {

    @Autowired
    CabinetRepository cabinetRepository;

    @Autowired
    CabinetService cabinetService;

    @GetMapping("/cabinets")
    public ResponseEntity<Collection<Cabinet>> getListCabinets(){
        Collection<Cabinet> cabinets = this.cabinetService.findAllCabinets();
        if(cabinets.isEmpty()){
            return new ResponseEntity<Collection<Cabinet>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Collection<Cabinet>>(cabinets, HttpStatus.OK);
    }

    @RequestMapping(value = "/cabinets/{cabinetId}", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<Cabinet> updateCabinet(@PathVariable("cabinetId") int cabinetId, @RequestBody Cabinet cabinet, BindingResult bindingResult){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (cabinet == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Cabinet>(headers, HttpStatus.BAD_REQUEST);
        }
        Cabinet currentCabinet = this.cabinetService.findCabinetById(cabinetId);
        if(currentCabinet == null){
            return new ResponseEntity<Cabinet>(HttpStatus.NOT_FOUND);
        }
        currentCabinet.setNameCabinet(cabinet.getNameCabinet());
        this.cabinetService.saveCabinet(currentCabinet);
        return new ResponseEntity<Cabinet>(currentCabinet, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/cabinets/{cabinetId}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<Cabinet> getCabinet(@PathVariable("cabinetId") int cabinetId){
        Cabinet cabinet = this.cabinetService.findCabinetById(cabinetId);
        if(cabinet == null){
            return new ResponseEntity<Cabinet>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Cabinet>(cabinet, HttpStatus.OK);
    }

    @RequestMapping(value = "/cabinets", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Cabinet> addCabinet(@RequestBody  Cabinet cabinet, BindingResult bindingResult, UriComponentsBuilder ucBuilder){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        if(bindingResult.hasErrors() || (cabinet == null)){
            errors.addAllErrors(bindingResult);
            headers.add("errors", errors.toJSON());
            return new ResponseEntity<Cabinet>(headers, HttpStatus.BAD_REQUEST);
        }
        this.cabinetService.saveCabinet(cabinet);
        headers.setLocation(ucBuilder.path("/cabinets/{id}").buildAndExpand(cabinet.getId()).toUri());
        return new ResponseEntity<Cabinet>(cabinet, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/cabinets/{cabinetId}", method = RequestMethod.DELETE, produces = "application/json")
    @Transactional
    public ResponseEntity<Void> deleteCabinet(@PathVariable("cabinetId") int cabinetId){
        Cabinet cabinet = this.cabinetService.findCabinetById(cabinetId);
        if(cabinet == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        this.cabinetService.deleteCabinet(cabinet);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
