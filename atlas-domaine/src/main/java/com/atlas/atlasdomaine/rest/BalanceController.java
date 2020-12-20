package com.atlas.atlasdomaine.rest;

import com.atlas.atlasdomaine.model.Balance;
import com.atlas.atlasdomaine.model.Comptable;
import com.atlas.atlasdomaine.repository.BalanceRepository;
import com.atlas.atlasdomaine.service.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

/**
 * @author ALLOUM Abderrahim on 16/12/2020
 * @project atlas-domaine
 */
@RestController
public class BalanceController {

    @Autowired
    BalanceService balanceService;

    @Autowired
    BalanceRepository balanceRepository;

    @GetMapping("/test")
    public String test(){
        return "Test";
    }

//    @GetMapping("/balances")
//    public Collection<Balance> getListBalances(){
//        return this.balanceService.findAllBalances();
//    }

    @GetMapping("/balances")
    public ResponseEntity<Collection<Balance>> getListBalances(){
        Collection<Balance> balances = this.balanceService.findAllBalances();
        if(balances.isEmpty()){
            return new ResponseEntity<Collection<Balance>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Collection<Balance>>(balances, HttpStatus.OK);
    }

    @RequestMapping(value = "/balances", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Balance[]> addBalance(@RequestBody Balance[] balances, BindingResult bindingResult, UriComponentsBuilder ucBuilder){
        BindingErrorsResponse errors = new BindingErrorsResponse();
        HttpHeaders headers = new HttpHeaders();
        List<Balance> balancesFinded = this.balanceRepository.findAll();
        if(!balancesFinded.isEmpty()){
          this.balanceRepository.deleteAll();
        }
        this.balanceRepository.saveAll(Arrays.asList(balances));
        return new ResponseEntity<>(balances, headers, HttpStatus.CREATED);
    }
}
