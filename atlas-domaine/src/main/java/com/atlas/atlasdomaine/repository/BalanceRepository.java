package com.atlas.atlasdomaine.repository;

import com.atlas.atlasdomaine.model.Balance;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author ALLOUM Abderrahim on 16/12/2020
 * @project atlas-domaine
 */
public interface BalanceRepository extends JpaRepository<Balance, Integer> {
}
