package com.desafio.desafio_votacao.dto;

import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.model.Sessao;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class SessaoDTO {
    private Long idPauta;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime inicio;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime fim;

    public Sessao toEntity() {

        Sessao sessao = new Sessao();

        Pauta pauta = new Pauta();
        pauta.setId(this.idPauta);
        sessao.setPauta(pauta);


        sessao.setInicio(this.inicio);
        sessao.setFim(this.fim);

        return sessao;
    }


    public Long getIdPauta() {
        return idPauta;
    }

    public void setIdPauta(Long idPauta) {
        this.idPauta = idPauta;
    }

    public LocalDateTime getInicio() {
        return inicio;
    }

    public void setInicio(LocalDateTime inicio) {
        this.inicio = inicio;
    }

    public LocalDateTime getFim() {
        return fim;
    }

    public void setFim(LocalDateTime fim) {
        this.fim = fim;
    }
}
