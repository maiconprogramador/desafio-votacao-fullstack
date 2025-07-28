package com.desafio.desafio_votacao.controllers;


import com.desafio.desafio_votacao.dto.SessaoDTO;
import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.services.SessaoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/sessoes")
public class SessaoController {
    private final SessaoService sessaoService;

    public SessaoController(SessaoService sessaoService) {
        this.sessaoService = sessaoService;
    }

    @PostMapping
    @Operation(summary = "Abrir uma nova sessão")
    public ResponseEntity<?> abrirSessao(@RequestBody SessaoDTO sessaoDto) {

        try {

            if (sessaoDto.getFim() == null) {
                sessaoDto.setFim(sessaoDto.getInicio().plusMinutes(1));
            }
            Sessao sessao = sessaoDto.toEntity();
            return ResponseEntity.ok(sessaoService.abrirSessao(sessao));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao abrir sessão: " + e.getMessage());
        }
    }

    @GetMapping("/buscarSessoesAbertas/{idSessao}")
    @Operation(summary = "Buscar sessoes abertas")
    public ResponseEntity<?> buscarSessoes(@PathVariable Long idSessao) {

        try {
            return ResponseEntity.ok(sessaoService.sessaoAberta(idSessao));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao buscar sessões: " + e.getMessage());
        }
    }

    @GetMapping("/listarTodasSessoesComStatus")
    @Operation(summary = "Listar todas as sessões com status de abertura")
    public ResponseEntity<?> listarSessoesComStatus() {
        try {
            return ResponseEntity.ok(sessaoService.listarSessoesComStatus());
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao buscar sessões com status: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    @Operation(summary = "Atualizar uma sessão")
    public ResponseEntity<?> atualizarSessao(@PathVariable Long id, @RequestBody SessaoDTO sessaoDto) {
        try {
            Sessao novaSessao = sessaoDto.toEntity();
            return ResponseEntity.ok(sessaoService.atualizarSessao(id, novaSessao));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao atualizar sessão: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar uma sessão")
    public ResponseEntity<?> deletarSessao(@PathVariable Long id) {
        try {
            sessaoService.deletarSessao(id);
            return ResponseEntity.ok().body("Sessão deletada com sucesso.");
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao deletar sessão: " + e.getMessage());
        }
    }
}
