package com.desafio.desafio_votacao.services;

import com.desafio.desafio_votacao.dto.SessaoStatusDTO;
import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.repositories.SessaoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SessaoService {

    private final SessaoRepository sessaoRepo;

    public SessaoService(SessaoRepository sessaoRepo) {
        this.sessaoRepo = sessaoRepo;
    }

    public boolean sessaoAberta(Long sessaoId) {
        return sessaoRepo.findById(sessaoId)
                .map(sessao -> {
                    LocalDateTime now = LocalDateTime.now();
                    return now.isAfter(sessao.getInicio()) && now.isBefore(sessao.getFim());
                })
                .orElse(false);
    }

    public Sessao abrirSessao(Sessao sessao) {
        return sessaoRepo.save(sessao);
    }

    public List<SessaoStatusDTO> listarSessoesComStatus() {
        LocalDateTime agora = LocalDateTime.now();
        return sessaoRepo.findAll().stream()
                .map(sessao -> new SessaoStatusDTO(
                        sessao,
                        agora.isAfter(sessao.getInicio()) && agora.isBefore(sessao.getFim())
                ))
                .toList();
    }
}
