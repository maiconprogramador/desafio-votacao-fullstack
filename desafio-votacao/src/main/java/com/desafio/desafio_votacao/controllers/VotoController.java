package com.desafio.desafio_votacao.controllers;


import com.desafio.desafio_votacao.model.Voto;
import com.desafio.desafio_votacao.services.VotoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/votos")
public class VotoController {
    private final VotoService votoService;

    public VotoController(VotoService votoService) {
        this.votoService = votoService;
    }

    @PostMapping
    public ResponseEntity<?> votar(@RequestBody Voto voto) {
        try {
            return ResponseEntity.ok(votoService.votar(voto));
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("Erro ao votar na sessão: " + e.getMessage());

        }
    }
}
