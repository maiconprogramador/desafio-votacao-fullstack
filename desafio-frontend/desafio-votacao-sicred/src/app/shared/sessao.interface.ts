export interface Sessao {
    id?: number;
    pautaId: number;
    inicio: string;
    fim?: string;
}

export interface SessaoStatus {
    sessao: {
        id: number,
        pauta: {
            id: number,
            titulo: string,
            descricao: string
        },
        inicio: string,
        fim: string
    },
    aberta: boolean;
}