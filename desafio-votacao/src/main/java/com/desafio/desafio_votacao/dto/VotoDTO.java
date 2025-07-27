package com.desafio.desafio_votacao.dto;

import com.desafio.desafio_votacao.model.Sessao;
import com.desafio.desafio_votacao.model.Voto;

public class VotoDTO {
    private String cpf;
    private Boolean voto;
    private Long idSessao;

    public Voto toEntity() {
        Voto voto = new Voto();
        voto.setCpf(this.cpf);
        voto.setVoto(this.voto);

        Sessao sessao = new Sessao();
        sessao.setId(this.idSessao);
        voto.setSessao(sessao);

        return voto;
    }

    public String getCpf() {
        return cpf;
    }

    public Boolean getVoto() {
        return voto;
    }

    public Long getIdSessao() {
        return idSessao;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setVoto(Boolean voto) {
        this.voto = voto;
    }

    public void setIdSessao(Long idSessao) {
        this.idSessao = idSessao;
    }
}
