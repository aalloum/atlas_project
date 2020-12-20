package com.atlas.atlasdomaine.service.Impl;

import com.atlas.atlasdomaine.model.Comptable;
import com.atlas.atlasdomaine.repository.ComptableRepository;
import com.atlas.atlasdomaine.service.ComptableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

/**
 * @author ALLOUM Abderrahim on 10/11/2020
 * @project atlas-domaine
 */
@Service
public class ComptableServiceImpl implements ComptableService {

    @Autowired
    private ComptableRepository comptableRepository;

    @Override
    @Transactional(readOnly = true)
    public Comptable findComptableById(int id) throws DataAccessException {
        Optional<Comptable> comptable = null;
        try {
            comptable = comptableRepository.findById(id);
        } catch (ObjectRetrievalFailureException | EmptyResultDataAccessException e) {
            return null;
        }
        return comptable.get();
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Comptable> findAllComptables() throws DataAccessException {
        return comptableRepository.findAll();
    }

    @Override
    @Transactional
    public void saveComptable(Comptable comptable) throws DataAccessException {
        comptableRepository.save(comptable);
    }

    @Override
    @Transactional
    public void deleteComptable(Comptable comptable) throws DataAccessException {
        comptableRepository.delete(comptable);
    }
}
