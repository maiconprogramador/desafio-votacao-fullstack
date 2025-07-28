package com.desafio.desafio_votacao.repositories;

import com.desafio.desafio_votacao.model.Pauta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PautaRepository extends JpaRepository<Pauta, Long> {

    @Query("SELECT p FROM Pauta p WHERE p.id NOT IN (SELECT s.pauta.id FROM Sessao s)")
    List<Pauta> findPautasSemSessao();
}
