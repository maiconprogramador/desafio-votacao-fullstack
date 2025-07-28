package com.desafio.desafio_votacao.infra.external;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class CpfClientValidation {
    public String validarCpfAssociado(String cpfAssociado) {
        boolean podeVotar = new Random().nextBoolean();
        return podeVotar ? "ABLE_TO_VOTE" : "UNABLE_TO_VOTE";
    }
}
