package com.desafio.desafio_votacao.dto;

public class ResultadoVotacaoDTO {
    private String pauta;
    private long totalVotos;
    private long votosSim;
    private long votosNao;
    private String resultado;

    public ResultadoVotacaoDTO(String pauta, long totalVotos, long votosSim, long votosNao, String resultado) {
        this.pauta = pauta;
        this.totalVotos = totalVotos;
        this.votosSim = votosSim;
        this.votosNao = votosNao;
        this.resultado = resultado;
    }

    public String getPauta() {
        return pauta;
    }

    public long getTotalVotos() {
        return totalVotos;
    }

    public long getVotosSim() {
        return votosSim;
    }

    public long getVotosNao() {
        return votosNao;
    }

    public String getResultado() {
        return resultado;
    }
}
