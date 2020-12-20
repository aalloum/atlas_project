package com.atlas.atlasdomaine.helper;

import com.atlas.atlasdomaine.model.PlanComptable;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.*;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author ALLOUM Abderrahim on 06/12/2020
 * @project atlas-domaine
 */
public class ExcelHelper {

    public static List<PlanComptable> readPlanComptableXLSFile(InputStream excelFileToRead) throws IOException {

        HSSFWorkbook wb = new HSSFWorkbook(excelFileToRead);
        HSSFSheet sheet = wb.getSheetAt(0);

        Iterator rows = sheet.rowIterator();

        List<PlanComptable> planComptables = new ArrayList<>();

        int rowNumber = 0;
        while (rows.hasNext()) {

            PlanComptable planComptable = new PlanComptable();

            HSSFRow row = (HSSFRow) rows.next();

            // Skip Header
            if (rowNumber == 0) {
                rowNumber++;
                continue;
            }

            Iterator cells = row.iterator();

            int cellIdx = 0;
            while (cells.hasNext()) {
                HSSFCell currentCell = (HSSFCell) cells.next();
                switch (cellIdx) {
                    case 0:
                        planComptable.setnB((int) currentCell.getNumericCellValue());
                        break;

                    case 1:
                        planComptable.setClasse(currentCell.getStringCellValue());
                        break;

                    case 2:
                        planComptable.setCompte((double) currentCell.getNumericCellValue());
                        break;

                    case 3:
                        planComptable.setLibelle(currentCell.getStringCellValue());
                        break;

                    case 4:
                        planComptable.setSousCompte(currentCell.getStringCellValue());
                        break;

                    case 5:
                        planComptable.setFormuleSousCompte(currentCell.getStringCellValue());
                        break;

                    default:
                        break;
                }
                cellIdx++;
            }
            planComptables.add(planComptable);
        }
        wb.close();
        return planComptables;
    }

}
