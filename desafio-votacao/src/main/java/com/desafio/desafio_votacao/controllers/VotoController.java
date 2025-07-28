package com.desafio.desafio_votacao.controllers;


import com.desafio.desafio_votacao.dto.VotoDTO;
import com.desafio.desafio_votacao.model.Voto;
import com.desafio.desafio_votacao.services.VotoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/votos")
public class VotoController {
    private final VotoService votoService;

    public VotoController(VotoService votoService) {
        this.votoService = votoService;
    }

    @PostMapping
    @Operation(summary = "Votar usando cpf de associado nas sessoes abertas")
    public ResponseEntity<?> votar(@RequestBody VotoDTO votoDTO) {
        try {
            Voto voto = votoDTO.toEntity();
            return ResponseEntity.ok(votoService.votar(voto));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao votar na sessão: " + e.getMessage());

        }
    }

    @GetMapping("/listarVotos/{idPauta}/resultado")
    @Operation(summary = "listar todos os votos e resultado")
    public ResponseEntity<?> listaTodosOsVotos(@PathVariable Long idPauta) {
        try {
            return ResponseEntity.ok(votoService.resultadoDaPauta(idPauta));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro listar todos os votos da sessão: " + e.getMessage());

        }
    }
}
