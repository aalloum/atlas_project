package com.atlas.atlasdomaine.service;

import com.atlas.atlasdomaine.model.Client;
import org.springframework.dao.DataAccessException;

import java.util.Collection;

/**
 * @author ALLOUM Abderrahim on 20/11/2020
 * @project atlas-domaine
 */
public interface ClientService {

    Client findClientById(int id) throws DataAccessException;
    Collection<Client> findAllClients() throws DataAccessException;
    void saveClient(Client client) throws DataAccessException;
    void deleteClient(Client client) throws DataAccessException;
}
