package com.atlas.atlasdomaine.rest;

import com.atlas.atlasdomaine.model.PlanComptable;
import com.atlas.atlasdomaine.repository.PlanComptableRepository;
import com.atlas.atlasdomaine.service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ALLOUM Abderrahim on 07/12/2020
 * @project atlas-domaine
 */
@RestController
public class ExcelPlanComptableController {

    @Autowired
    ExcelService fileService;

    @Autowired
    PlanComptableRepository planComptableRepository;

    @GetMapping("/planComptables")
    public ResponseEntity<List<PlanComptable>> getAllPlanComptables() {
        try {
            List<PlanComptable> planComptables = fileService.getAllPlanComptables();

            if (planComptables.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(planComptables, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
