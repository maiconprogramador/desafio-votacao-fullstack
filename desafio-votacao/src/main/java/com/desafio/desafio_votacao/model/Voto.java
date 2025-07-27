package com.desafio.desafio_votacao.model;

import com.desafio.desafio_votacao.utils.VotoEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Voto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cpf;

    private Boolean voto;

    @ManyToOne
    private Sessao sessao;

    public Long getId() {
        return id;
    }

    public String getCpf() {
        return cpf;
    }

    public Boolean getVoto() {
        return voto;
    }

    public Sessao getSessao() {
        return sessao;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setVoto(Boolean voto) {
        this.voto = voto;
    }

    public void setSessao(Sessao sessao) {
        this.sessao = sessao;
    }

    public VotoEnum getVotoEnum() {
        return Boolean.TRUE.equals(this.voto) ? VotoEnum.SIM : VotoEnum.NAO;
    }
}
