package com.atlas.atlasdomaine.repository;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Comptable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author ALLOUM Abderrahim on 08/11/2020
 * @project atlas-domaine
 */
public interface ComptableRepository extends JpaRepository<Comptable, Integer> {
     List<Comptable> findAllByCabinet(Cabinet cabinet);
}
