package com.atlas.atlasdomaine;

import com.atlas.atlasdomaine.model.PlanComptable;
import com.atlas.atlasdomaine.repository.PlanComptableRepository;
import com.atlas.atlasdomaine.service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class AtlasDomaineApplication {

	@Autowired
    ExcelService excelService;

	@Autowired
	PlanComptableRepository planComptableRepository;

	public static void main(String[] args) {
		SpringApplication.run(AtlasDomaineApplication.class, args);
	}


	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() throws IOException {
		List<PlanComptable> planComptables = planComptableRepository.findAll();
		if (planComptables.isEmpty()) {
			File file = ResourceUtils.getFile("classpath:Plan-Comptable-marocain-excel.xls");
			InputStream excelFileToRead = new FileInputStream(file);
			excelService.saveWithInputStream(excelFileToRead);
		} else {
			System.out.println("**** PLAN COMPTABLE IS ALREADY LOADED ****");
		}
	}
}
