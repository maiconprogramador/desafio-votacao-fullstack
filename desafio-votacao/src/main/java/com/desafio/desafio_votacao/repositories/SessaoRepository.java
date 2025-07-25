package com.desafio.desafio_votacao.repositories;

import com.desafio.desafio_votacao.model.Sessao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessaoRepository extends JpaRepository<Sessao, Long> {
}
