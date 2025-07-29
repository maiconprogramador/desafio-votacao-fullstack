# Use imagem oficial do Java 21
FROM eclipse-temurin:21-jdk-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia o projeto Maven e resolve dependências
COPY . /app

# Dá permissão de execução para o mvnw
RUN chmod +x ./mvnw

# Compila o projeto
RUN ./mvnw clean package -DskipTests

# Expõe a porta padrão do Spring Boot
EXPOSE 8080

# Comando para rodar o .jar
CMD ["java", "-jar", "target/desafio-votacao-0.0.1-SNAPSHOT.jar"]
