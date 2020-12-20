package com.atlas.atlasdomaine.service;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Comptable;
import org.springframework.dao.DataAccessException;

import java.util.Collection;

/**
 * @author ALLOUM Abderrahim on 19/11/2020
 * @project atlas-domaine
 */
public interface CabinetService {

    Cabinet findCabinetById(int id) throws DataAccessException;
    Collection<Cabinet> findAllCabinets() throws DataAccessException;
    void saveCabinet(Cabinet cabinet) throws DataAccessException;
    void deleteCabinet(Cabinet cabinet) throws DataAccessException;
}
