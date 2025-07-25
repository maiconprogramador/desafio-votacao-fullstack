package com.desafio.desafio_votacao.dto;

public class VotoDTO {
    private String cpf;
    private Boolean voto;
    private Long idSessao;

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
