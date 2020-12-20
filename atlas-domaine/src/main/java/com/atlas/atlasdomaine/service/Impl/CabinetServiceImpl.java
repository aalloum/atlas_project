package com.atlas.atlasdomaine.service.Impl;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Comptable;
import com.atlas.atlasdomaine.repository.CabinetRepository;
import com.atlas.atlasdomaine.service.CabinetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

/**
 * @author ALLOUM Abderrahim on 19/11/2020
 * @project atlas-domaine
 */
@Service
public class CabinetServiceImpl implements CabinetService {

    @Autowired
    CabinetRepository cabinetRepository;

    @Override
    @Transactional(readOnly = true)
    public Cabinet findCabinetById(int id) throws DataAccessException {
        Optional<Cabinet> cabinet = null;
        try {
            cabinet = cabinetRepository.findById(id);
        } catch (ObjectRetrievalFailureException | EmptyResultDataAccessException e) {
            return null;
        }
        return cabinet.get();
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Cabinet> findAllCabinets() throws DataAccessException {
        return cabinetRepository.findAll();
    }

    @Override
    @Transactional
    public void saveCabinet(Cabinet cabinet) throws DataAccessException {
        cabinetRepository.save(cabinet);
    }

    @Override
    @Transactional
    public void deleteCabinet(Cabinet cabinet) throws DataAccessException {
        cabinetRepository.delete(cabinet);
    }
}
