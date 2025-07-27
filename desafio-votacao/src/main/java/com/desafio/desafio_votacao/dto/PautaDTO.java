package com.desafio.desafio_votacao.dto;

import com.desafio.desafio_votacao.model.Pauta;
import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.model.Voto;

public class PautaDTO {
    private String titulo;
    private String descricao;

    public Pauta toEntity() {
        Pauta pauta = new Pauta();
        pauta.setTitulo(this.titulo);
        pauta.setDescricao(this.descricao);
        return pauta;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
