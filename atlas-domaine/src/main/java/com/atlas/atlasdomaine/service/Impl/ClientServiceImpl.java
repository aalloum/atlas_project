package com.atlas.atlasdomaine.service.Impl;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.repository.ClientRepository;
import com.atlas.atlasdomaine.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

/**
 * @author ALLOUM Abderrahim on 20/11/2020
 * @project atlas-domaine
 */
@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    ClientRepository clientRepository;

    @Override
    @Transactional(readOnly = true)
    public Client findClientById(int id) throws DataAccessException {
        Optional<Client> client = null;
        try {
            client = clientRepository.findById(id);
        } catch (ObjectRetrievalFailureException | EmptyResultDataAccessException e) {
            return null;
        }
        return client.get();
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Client> findAllClients() throws DataAccessException {
        return clientRepository.findAll();
    }

    @Override
    @Transactional
    public void saveClient(Client client) throws DataAccessException {
        clientRepository.save(client);
    }

    @Override
    @Transactional
    public void deleteClient(Client client) throws DataAccessException {
        clientRepository.delete(client);
    }
}
