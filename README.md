## Descrição

Api desenvolvida com [Nest](https://github.com/nestjs/nest) TypeScript framework, utilizando [Docker](https://docs.docker.com/).

Caso ainda não possua o docker em sua máquina, recomendo a leitura da [documentação de instalação](https://docs.docker.com/engine/install/ubuntu/).

## Instalação

```bash
$ npm install
```

## Execução

```bash
# start docker
$ docker compose up -d

# start watch mode
$ npm run start:dev

```

## Endpoints da API

### Criar um animal

POST => ```http://localhost:3000/animals/```

```bash
curl --location --request POST 'localhost:3000/animals' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'descricaoAnimal=Cachorro' \
--data-urlencode 'grupoAnimais=TERRESTRE' \
--data-urlencode 'classeAnimais=MAMIFERO'
```

### Editar um animal

PUT => ```http://localhost:3000/animals/:id```

Exemplo:
```bash
curl --location --request PUT 'http://localhost:3000/animals/da3b7089-64cb-48a4-bbd1-aca5d920aadd' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grupoAnimais=AQUATICO'
```

### Editar um animal

DELETE => ```http://localhost:3000/animals/:id```

Exemplo:
```bash
curl --location --request DELETE 'http://localhost:3000/animals/9167f636-c27a-48b9-97fa-8cd75dfc4e40'
```

### Listar todos os animais

GET => ```http://localhost:3000/animals/```

Exemplo:
```bash
curl --location --request GET 'http://localhost:3000/animals/'
```

### Listar animais por descrição

GET => ```http://localhost:3000/animals/:descricao```

Exemplo:
```bash
curl --location --request GET 'http://localhost:3000/animal/gato'
```

### Listar animais por grupo

GET => ```http://localhost:3000/animals/:grupo```

Exemplo:
```bash
curl --location --request GET 'http://localhost:3000/animal/aquático'
```

### Listar animais por classe

GET => ```http://localhost:3000/animals/:classe```

Exemplo:
```bash
curl --location --request GET 'http://localhost:3000/animal/réptil'
```
