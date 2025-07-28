package com.desafio.desafio_votacao.controllers;

import com.desafio.desafio_votacao.dto.PautaDTO;
import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.services.PautaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/pautas")
public class PautaController {

    private final PautaService pautaService;

    public PautaController(PautaService pautaService) {
        this.pautaService = pautaService;
    }

    @GetMapping
    @Operation(summary = "Listar todas as pautas")
    public ResponseEntity<?> listar() {
        try {
            return ResponseEntity.ok(pautaService.listarPautas());
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao listar todas as pautas: " + e.getMessage());
        }
    }

    @PostMapping
    @Operation(summary = "Criar nova pauta")
    public ResponseEntity<?> criar(@RequestBody PautaDTO pautaDto) {
        try {
            Pauta pauta = pautaDto.toEntity();
            return ResponseEntity.ok(pautaService.criarPauta(pauta));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao criar pauta: " + e.getMessage());
        }
    }

    @PostMapping("/buscaPorId/{id}")
    @Operation(summary = "Buscar pauta por ID")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return pautaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
