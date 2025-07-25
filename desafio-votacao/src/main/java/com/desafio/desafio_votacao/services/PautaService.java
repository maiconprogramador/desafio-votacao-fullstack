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
}
