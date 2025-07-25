package com.desafio.desafio_votacao.services;

import com.desafio.desafio_votacao.model.Voto;
import com.desafio.desafio_votacao.repositories.VotoRepository;
import org.springframework.stereotype.Service;

@Service
public class VotoService {

    private final VotoRepository votoRepo;
    private final SessaoService sessaoService;

    public VotoService(VotoRepository votoRepo, SessaoService sessaoService) {
        this.sessaoService = sessaoService;
        this.votoRepo = votoRepo;
    }

    public Voto votar(Voto voto) {
        if (!sessaoService.sessaoAberta(voto.getSessao().getId())) {
            throw new IllegalStateException("Sessão encerrada.");
        }

        if (votoRepo.existsBySessaoIdAndCpf(voto.getSessao().getId(), voto.getCpf())) {
            throw new IllegalStateException("Voto já registrado para este CPF.");
        }

        return votoRepo.save(voto);
    }
}
