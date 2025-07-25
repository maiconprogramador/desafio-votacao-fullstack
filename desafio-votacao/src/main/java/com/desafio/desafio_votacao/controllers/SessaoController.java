package com.desafio.desafio_votacao.controllers;


import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.services.SessaoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sessoes")
public class SessaoController {
    private final SessaoService sessaoService;

    public SessaoController(SessaoService sessaoService) {
        this.sessaoService = sessaoService;
    }

    @PostMapping
    @Operation(summary = "Abrir uma nova sessão")
    public ResponseEntity<?> abrirSessao(@RequestBody Sessao sessao) {

        try {
            System.out.println("entrou: "+sessao.getInicio());

            if (sessao.getFim() == null) {
                sessao.setFim(sessao.getInicio().plusMinutes(1));
            }
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
}
