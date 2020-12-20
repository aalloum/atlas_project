package com.atlas.atlasdomaine.repository;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.model.Comptable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
public interface ClientRepository extends JpaRepository<Client, Integer> {
    List<Client> findAllByCabinet(Cabinet cabinet);
}
