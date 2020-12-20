package com.atlas.atlasdomaine.service;

import com.atlas.atlasdomaine.helper.ExcelHelper;
import com.atlas.atlasdomaine.model.PlanComptable;
import com.atlas.atlasdomaine.repository.PlanComptableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * @author ALLOUM Abderrahim on 07/12/2020
 * @project atlas-domaine
 */
@Service
public class ExcelService {

    @Autowired
    PlanComptableRepository planComptableRepository;

    public void saveWithMultipartFile(MultipartFile file) {
        try {
            List<PlanComptable> planComptables = ExcelHelper.readPlanComptableXLSFile(file.getInputStream());
            planComptableRepository.saveAll(planComptables);
        } catch (IOException e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }

    public void saveWithInputStream(InputStream in) {
        try {
            List<PlanComptable> planComptables = ExcelHelper.readPlanComptableXLSFile(in);
            planComptableRepository.saveAll(planComptables);
        } catch (IOException e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }

    public List<PlanComptable> getAllPlanComptables(){
        return planComptableRepository.findAll();
    }

}
