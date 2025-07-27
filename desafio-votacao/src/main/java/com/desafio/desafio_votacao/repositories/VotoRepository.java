package com.desafio.desafio_votacao.repositories;

import com.desafio.desafio_votacao.model.Voto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VotoRepository extends JpaRepository<Voto, Long> {
    boolean existsBySessaoIdAndCpf(Long sessaoId, String cpf);

    @Query("SELECT v FROM Voto v JOIN v.sessao s JOIN s.pauta p WHERE p.id = :pautaId")
    List<Voto> findByPautaId(@Param("pautaId") Long pautaId);
}
