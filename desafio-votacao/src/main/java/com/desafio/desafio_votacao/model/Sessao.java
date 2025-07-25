package com.desafio.desafio_votacao.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Sessao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Pauta pauta;

    private LocalDateTime inicio;

    private LocalDateTime fim;

    public Long getId() {
        return id;
    }

    public Pauta getPauta() {
        return pauta;
    }

    public LocalDateTime getInicio() {
        return inicio;
    }

    public LocalDateTime getFim() {
        return fim;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPauta(Pauta pauta) {
        this.pauta = pauta;
    }

    public void setInicio(LocalDateTime inicio) {
        this.inicio = inicio;
    }

    public void setFim(LocalDateTime fim) {
        this.fim = fim;
    }
}
