package com.atlas.atlasdomaine.service;

import com.atlas.atlasdomaine.model.Comptable;
import org.springframework.dao.DataAccessException;

import java.util.Collection;

/**
 * @author ALLOUM Abderrahim on 10/11/2020
 * @project atlas-domaine
 */
public interface ComptableService {

    Comptable findComptableById(int id) throws DataAccessException;
    Collection<Comptable> findAllComptables() throws DataAccessException;
    void saveComptable(Comptable comptable) throws DataAccessException;
    void deleteComptable(Comptable comptable) throws DataAccessException;
}
