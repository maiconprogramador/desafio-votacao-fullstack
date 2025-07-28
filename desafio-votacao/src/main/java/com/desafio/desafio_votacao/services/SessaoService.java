package com.desafio.desafio_votacao.services;

import com.desafio.desafio_votacao.dto.SessaoStatusDTO;
import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.repositories.SessaoRepository;
import org.springframework.stereotype.Service;

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
                .map(this::isSessaoAberta)
                .orElse(false);
    }

    private boolean isSessaoAberta(Sessao sessao) {
        LocalDateTime agora = LocalDateTime.now();
        System.out.println("horas: " + agora);
        return agora.isAfter(sessao.getInicio()) && agora.isBefore(sessao.getFim());
    }

    public Sessao abrirSessao(Sessao sessao) {
        return sessaoRepo.save(sessao);
    }

    public List<SessaoStatusDTO> listarSessoesComStatus() {
        return sessaoRepo.findAll().stream()
                .map(sessao -> new SessaoStatusDTO(sessao, isSessaoAberta(sessao)))
                .toList();
    }

    public Sessao atualizarSessao(Long id, Sessao novaSessao) {
        return sessaoRepo.findById(id)
                .map(sessaoExistente -> {
                    sessaoExistente.setInicio(novaSessao.getInicio());
                    sessaoExistente.setFim(novaSessao.getFim());
                    sessaoExistente.setPauta(novaSessao.getPauta());
                    return sessaoRepo.save(sessaoExistente);
                })
                .orElseThrow(() -> new IllegalStateException("Sessão não encontrada para atualização"));
    }

    public void deletarSessao(Long id) {
        if (!sessaoRepo.existsById(id)) {
            throw new IllegalStateException("Sessão não encontrada para exclusão");
        }
        sessaoRepo.deleteById(id);
    }
}
