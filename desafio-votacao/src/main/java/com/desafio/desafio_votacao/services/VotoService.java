package com.desafio.desafio_votacao.services;

import com.desafio.desafio_votacao.dto.ResultadoVotacaoDTO;
import com.desafio.desafio_votacao.infra.external.CpfClientValidation;
import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.model.Voto;
import com.desafio.desafio_votacao.repositories.PautaRepository;
import com.desafio.desafio_votacao.repositories.VotoRepository;
import com.desafio.desafio_votacao.utils.VotoEnum;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class VotoService {

    private final VotoRepository votoRepo;
    private final SessaoService sessaoService;
    private final PautaRepository pautaRepo;
    private final CpfClientValidation cpfClientValidation;

    public VotoService(VotoRepository votoRepo, SessaoService sessaoService, PautaRepository pautaRepo, CpfClientValidation cpfClientValidation) {
        this.sessaoService = sessaoService;
        this.votoRepo = votoRepo;
        this.pautaRepo = pautaRepo;
        this.cpfClientValidation = cpfClientValidation;
    }

    public Voto votar(Voto voto) {
        String status = cpfClientValidation.validarCpfAssociado(voto.getCpf());

        if (!sessaoService.sessaoAberta(voto.getSessao().getId())) {
            throw new IllegalStateException("Sessão encerrada.");
        }

        if (votoRepo.existsBySessaoIdAndCpf(voto.getSessao().getId(), voto.getCpf())) {
            throw new IllegalStateException("Voto já registrado para este CPF.");
        }

        if (!"ABLE_TO_VOTE".equals(status)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "CPF não está autorizado a votar.");
        }

        return votoRepo.save(voto);
    }

    public List<Voto> listarVotos() {
        return votoRepo.findAll();
    }

    public ResultadoVotacaoDTO resultadoDaPauta(Long pautaId) {
        Pauta pauta = pautaRepo.findById(pautaId)
                .orElseThrow(() -> new RuntimeException("Pauta não encontrada"));

        List<Voto> votos = votoRepo.findByPautaId(pautaId);

        long votosSim = votos.stream().filter(v -> v.getVotoEnum() == VotoEnum.SIM).count();
        long votosNao = votos.stream().filter(v -> v.getVotoEnum() == VotoEnum.NAO).count();

        String resultado = (votosSim > votosNao) ? "APROVADA" :
                (votosNao > votosSim) ? "REPROVADA" : "EMPATE";

        return new ResultadoVotacaoDTO(pauta.getTitulo(), votos.size(), votosSim, votosNao, resultado);
    }



}
