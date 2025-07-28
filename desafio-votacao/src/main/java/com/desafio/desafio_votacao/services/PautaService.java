package com.desafio.desafio_votacao.services;

import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.repositories.PautaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PautaService {
    private final PautaRepository pautaRepository;

    public PautaService(PautaRepository pautaRepository) {
        this.pautaRepository = pautaRepository;
    }

    public Pauta criarPauta(Pauta pauta) {
        return pautaRepository.save(pauta);
    }

    public List<Pauta> listarPautas() {
        return pautaRepository.findAll();
    }

    public Optional<Pauta> buscarPorId(Long id) {
        return pautaRepository.findById(id);
    }

    public Pauta atualizarPauta(Long id, Pauta novaPauta) {
        return pautaRepository.findById(id)
                .map(pauta -> {
                    pauta.setTitulo(novaPauta.getTitulo());
                    pauta.setDescricao(novaPauta.getDescricao());
                    return pautaRepository.save(pauta);
                })
                .orElseThrow(() -> new IllegalStateException("Pauta não encontrada com id: " + id));
    }

    public void deletarPauta(Long id) {
        if (!pautaRepository.existsById(id)) {
            throw new IllegalStateException("Pauta não encontrada com id: " + id);
        }
        pautaRepository.deleteById(id);
    }

    public List<Pauta> buscarPautasSemSessao() {
        return pautaRepository.findPautasSemSessao();
    }
}
