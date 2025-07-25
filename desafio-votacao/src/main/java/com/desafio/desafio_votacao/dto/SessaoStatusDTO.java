package com.desafio.desafio_votacao.dto;


import com.desafio.desafio_votacao.model.Sessao;

public class SessaoStatusDTO {
    private Sessao sessao;
    private boolean aberta;

    public SessaoStatusDTO(){}

    public SessaoStatusDTO(Sessao sessao, boolean aberta) {
        this.sessao = sessao;
        this.aberta = aberta;
    }

    public boolean isAberta() {
        return aberta;
    }

    public void setAberta(boolean aberta) {
        this.aberta = aberta;
    }

    public Sessao getSessao() {
        return sessao;
    }

    public void setSessao(Sessao sessao) {
        this.sessao = sessao;
    }
}
