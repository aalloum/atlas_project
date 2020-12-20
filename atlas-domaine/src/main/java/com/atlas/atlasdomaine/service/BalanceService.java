package com.atlas.atlasdomaine.service;

import com.atlas.atlasdomaine.model.Balance;
import org.springframework.dao.DataAccessException;

import java.util.Collection;

/**
 * @author ALLOUM Abderrahim on 16/12/2020
 * @project atlas-domaine
 */
public interface BalanceService {

    Balance findBalanceById(int id) throws DataAccessException;
    Collection<Balance> findAllBalances() throws DataAccessException;
    void saveBalance(Balance balance) throws DataAccessException;
    void deleteBalance(Balance balance) throws DataAccessException;
}
