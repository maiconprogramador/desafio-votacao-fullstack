# 🗳️ Desafio Votação

Sistema de votação cooperativa desenvolvido com Spring Boot (Java), Angular e PostgreSQL, hospedado gratuitamente com o Railway.

## ✅ Funcionalidades


- ✅ Criar pauta de votação
- ✅ Abrir sessão para uma pauta
- ✅ Registrar votos (sim/não) por CPF
- ✅ Verificar se CPF está autorizado a votar (mock externo)
- ✅ Apuração dos votos por sessão
- ✅ API REST com Swagger
- ✅ Integração com banco PostgreSQL na nuvem (Railway)
- ✅ Front-end Angular

---

## 🧱 Tecnologias Utilizadas

| Camada       | Tecnologia                    |
|--------------|-------------------------------|
| Back-end     | Java 21, Spring Boot 3        |
| Front-end    | Angular                    |
| Banco de Dados | PostgreSQL (Railway Cloud)  |
| Deploy       | Railway (gratuito)            |
| Build Tool   | Maven                         |
| Versionamento| Git + GitHub                  |

---

## 🔧 Configuração do projeto

### ▶️ Pré-requisito

- Java 21+
- Maven
- Node.js + Angular CLI (para o front)

---

## 🚀 Como executar o back-end localmente

```bash
git clone https://github.com/maiconprogramador/desafio-votacao-fullstack.git
cd desafio-votacao/desafio-back
```
# Executar com Maven o back
./mvnw clean install
./mvnw spring-boot:run

# Executar com Node o front
npm install
npm run start

# Urls de ambiente na nuvem

backend swagger: https://desafio-votacao-fullstack-8nwr.onrender.com/swagger-ui/index.html

hospedado na RENDER https://render.com/

frontend home: https://desafio-votacao-fullstack-hwpx5vo5a-maicons-projects-df603f84.vercel.app/

hospedado na VERCEL https://vercel.com/

Fluxo de navegação

1- criar uma pauta
2- abrir uma sessão para essa pauta com data de inicio e fim(opcional)
3- votar na sessão usando o cpf de associado

# Votação

## Objetivo

No cooperativismo, cada associado possui um voto e as decisões são tomadas em assembleias, por votação. Imagine que você deve criar uma solução we para gerenciar e participar dessas sessões de votação.
Essa solução deve ser executada na nuvem e promover as seguintes funcionalidades através de uma API REST / Front:

- Cadastrar uma nova pauta
- Abrir uma sessão de votação em uma pauta (a sessão de votação deve ficar aberta por
  um tempo determinado na chamada de abertura ou 1 minuto por default)
- Receber votos dos associados em pautas (os votos são apenas 'Sim'/'Não'. Cada associado
  é identificado por um id único e pode votar apenas uma vez por pauta)
- Contabilizar os votos e dar o resultado da votação na pauta

Para fins de exercício, a segurança das interfaces pode ser abstraída e qualquer chamada para as interfaces pode ser considerada como autorizada. A solução deve ser construída em java com Spring-boot e Angular/React conforme orientação, mas os frameworks e bibliotecas são de livre escolha (desde que não infrinja direitos de uso).

É importante que as pautas e os votos sejam persistidos e que não sejam perdidos com o restart da aplicação.

## Como proceder

Por favor, realize o FORK desse repositório e implemente sua solução no FORK em seu repositório GItHub, ao final, notifique da conclusão para que possamos analisar o código implementado.

Lembre de deixar todas as orientações necessárias para executar o seu código.

### Tarefas bônus

- Tarefa Bônus 1 - Integração com sistemas externos
  - Criar uma Facade/Client Fake que retorna aleátoriamente se um CPF recebido é válido ou não.
  - Caso o CPF seja inválido, a API retornará o HTTP Status 404 (Not found). Você pode usar geradores de CPF para gerar CPFs válidos
  - Caso o CPF seja válido, a API retornará se o usuário pode (ABLE_TO_VOTE) ou não pode (UNABLE_TO_VOTE) executar a operação. Essa operação retorna resultados aleatórios, portanto um mesmo CPF pode funcionar em um teste e não funcionar no outro.

```
// CPF Ok para votar
{
    "status": "ABLE_TO_VOTE
}
// CPF Nao Ok para votar - retornar 404 no client tb
{
    "status": "UNABLE_TO_VOTE
}
```

Exemplos de retorno do serviço

### Tarefa Bônus 2 - Performance

- Imagine que sua aplicação possa ser usada em cenários que existam centenas de
  milhares de votos. Ela deve se comportar de maneira performática nesses
  cenários
- Testes de performance são uma boa maneira de garantir e observar como sua
  aplicação se comporta

### Tarefa Bônus 3 - Versionamento da API

○ Como você versionaria a API da sua aplicação? Que estratégia usar?

## O que será analisado

- Simplicidade no design da solução (evitar over engineering)
- Organização do código
- Arquitetura do projeto
- Boas práticas de programação (manutenibilidade, legibilidade etc)
- Possíveis bugs
- Tratamento de erros e exceções
- Explicação breve do porquê das escolhas tomadas durante o desenvolvimento da solução
- Uso de testes automatizados e ferramentas de qualidade
- Limpeza do código
- Documentação do código e da API
- Logs da aplicação
- Mensagens e organização dos commits
- Testes
- Layout responsivo

## Dicas

- Teste bem sua solução, evite bugs

  Observações importantes
- Não inicie o teste sem sanar todas as dúvidas
- Iremos executar a aplicação para testá-la, cuide com qualquer dependência externa e
  deixe claro caso haja instruções especiais para execução do mesmo
  Classificação da informação: Uso Interno



# desafio-votacao
