# Plaseg - Plataforma de Apoio à Segurança Pública

Disponibilizar uma plataforma para se apoiar na construção de projetos para editais de financiamento.

## Índice

1. [Como usar](#como-usar)
2. [Features Básicas](#features-básicas)
3. [Quadro de atividades Kanban](#quadro-de-atividades-kanban)
4. [Regras de Negócio](#regras-de-negócio)
5. [Testes da aplicação front-end](#testes-da-aplicação-front-end)
6. [Referências](#referências)

## Como usar

1. **Você precisa ter o [NodeJS](https://en.wikipedia.org/wiki/Node.js) instalado na sua máquina para fazer o setup da aplicação.**

   - Instale o Node.js na sua máquina no site oficial do [Node.js](https://nodejs.org/en).
   - No Windows/Linux/MacOS instale o pnpm:
     ```bash
     npm install pnpm -g
     ```
   - Clone a aplicação.
     ```bash
     git clone https://github.com/plaseg/plaseg
     ```
   - Vá para o diretório do projeto:
     ```bash
     cd plaseg
     ```
   - Agora instale as depedências do projeto
     ```bash
     pnpm install
     ```

2. **Execute a aplicação:**
   - No terminal da pasta raiz, no Windows/Linux/MacOS:
     `bash
pnpm dev
`
     Observação:

- Antes de executar a aplicação front-end, procure deixar a [aplicação back-end](https://github.com/compexjr/seed_backend) executando para permitir os testes fim a fim (front-end->back-end, back-end->front-end).

## Features Básicas

1. F3. Registro de uma nova empresa
2. F4. Registro de um novo município
3. F5. Realizar pagamento de um plano selecionado.

## Quadro de atividades Kanban

Este projeto é dividido em diferentes tarefas conforme um fluxo de trabalho estruturado. Abaixo estão as tarefas salvas da equipe de front-end:

Quadro de Tarefas (Front-end) disponível em [link]()

## Regras de Negócio

- **Cadastro de empresa:** Deve ser possível realizar o cadastro de uma empresa.
- **Cadastro de município:** Deve ser possível realizar o cadastro de um município.
- **Realizar pagamento:** Deve ser possível realizar o pagamento de um plano selecionado.

## Testes da aplicação front-end

Existem vários tipos de testes de software que podem ser aplicados durante o processo de desenvolvimento para garantir a qualidade do software. Logo abaixo seguem os tipos de testes que deverão ser feitos para garantir a qualidade da nossa aplicação.

### Testes Unitários

É realizado para verificar se as unidades individuais de código (geralmente funções, métodos ou classes) funcionam corretamente. O objetivo é testar cada unidade isoladamente para identificar possíveis erros lógicos ou funcionais. Geralmente, é executado pelos desenvolvedores.

```bash
pnpm test
```

### Testes E2E (End-to-End)

Os testes E2E (End-to-End) são realizados para verificar o funcionamento completo de um sistema, desde o início até o fim. O objetivo é simular o comportamento real do usuário, garantindo que todos os componentes do sistema (frontend, backend, banco de dados, etc.) funcionem corretamente em conjunto. Esses testes ajudam a identificar problemas de integração e a validar fluxos de trabalho críticos. Geralmente, são executados por desenvolvedores ou equipes de QA.

```bash
pnpm test:e2e
```

## Referências

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
- [Node](https://nodejs.org/en)
- [React](https://react.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [JWT](https://jwt.io)
- [PlantUML](https://plantuml.com)
- [Editor PlantUML](https://plantuml-editor.kkeisuke.com)
