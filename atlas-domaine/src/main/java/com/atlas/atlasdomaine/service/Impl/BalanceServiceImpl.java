package com.atlas.atlasdomaine.service.Impl;

import com.atlas.atlasdomaine.model.Balance;
import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.repository.BalanceRepository;
import com.atlas.atlasdomaine.repository.CabinetRepository;
import com.atlas.atlasdomaine.service.BalanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

/**
 * @author ALLOUM Abderrahim on 16/12/2020
 * @project atlas-domaine
 */
@Service
public class BalanceServiceImpl implements BalanceService {

    @Autowired
    BalanceRepository balanceRepository;

    @Override
    @Transactional(readOnly = true)
    public Balance findBalanceById(int id) throws DataAccessException {
        Optional<Balance> balance = null;
        try {
            balance = balanceRepository.findById(id);
        } catch (ObjectRetrievalFailureException | EmptyResultDataAccessException e) {
            return null;
        }
        return balance.get();
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Balance> findAllBalances() throws DataAccessException {
        return balanceRepository.findAll();
    }

    @Override
    @Transactional
    public void saveBalance(Balance balance) throws DataAccessException {
        balanceRepository.save(balance);
    }

    @Override
    @Transactional
    public void deleteBalance(Balance balance) throws DataAccessException {
        balanceRepository.delete(balance);
    }
}
