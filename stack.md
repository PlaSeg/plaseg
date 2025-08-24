# My Stack - ReactJS Application

## Sobre a Stack escolhida

Uma **stack** em desenvolvimento web é um conjunto de tecnologias que trabalham juntas para construir uma aplicação. No caso desta aplicação ReactJS, temos um conjunto de ferramentas modernas e otimizadas para o desenvolvimento de interfaces rápidas, responsivas e escaláveis.

Abaixo, descrevemos cada componente da stack e como eles se integram para criar esta aplicação:

## Core Technologies

### React

- **Linguagem de interface:** Serve como a base para toda a aplicação, fornecendo os componentes e a estrutura para construção de interfaces.
- **Biblioteca declarativa:** React permite criar UIs baseadas no estado e no comportamento dinâmico da aplicação.
- **Componentização:** Facilita o reuso de partes do código, aumentando a manutenibilidade e a escalabilidade do projeto.
- **Versão:** Esta aplicação usa React 18.3.1, a versão mais recente e otimizada para desempenho.

### TypeScript

- **Superset do JavaScript:** Introduz tipagem estática, ajudando a prevenir erros comuns e a melhorar a produtividade durante o desenvolvimento.
- **Versão:** TypeScript 5.6.2 fornece as ferramentas mais recentes para tipagem robusta.

### Vite

- **Empacotador de módulos:** Ferramenta de build ultrarrápida para aplicações web modernas.
- **Desenvolvimento otimizado:** Oferece hot-module replacement (HMR) e builds instantâneos, permitindo um fluxo de desenvolvimento fluido.
- **Configuração simplificada:** Com Vite, não é necessário configurar manualmente ferramentas como Webpack.

## Routing & Navigation

### React Router

- **Gerenciador de rotas:** Permite a criação de navegação dentro da aplicação, lidando com páginas diferentes sem recarregar o navegador.
- **Versão:** React Router 7.1.3 é usada para rotas modernas e otimizadas.

## Styling & UI Components

### Tailwind CSS

- **Framework de estilos:** Um framework CSS utilitário para criar interfaces personalizadas de maneira rápida e eficiente.
- **Estilo baseado em classes:** Cada classe aplica um único estilo, permitindo o design de componentes diretamente no HTML/JSX.
- **Complemento com tailwind-merge:** O pacote `tailwind-merge` é usado para combinar classes do Tailwind, evitando conflitos de estilo.

### shadcn/ui

- **Componentes de UI:** Uma coleção de componentes acessíveis e altamente customizáveis, construídos sobre Radix UI e Tailwind CSS.
- **Facilidade de uso:** Componentes prontos para uso, permitindo criação rápida de interfaces com design moderno.
- **Extensível e modular:** Permite personalização total dos componentes para atender às necessidades específicas da aplicação.

### Radix UI

- **Componentes primitivos:** Biblioteca de componentes acessíveis e não estilizados que servem como base para o shadcn/ui.
- **Acessibilidade:** Garante que todos os componentes sigam as melhores práticas de acessibilidade web.
- **Componentes incluídos:** Avatar, Checkbox, Collapsible, Dialog, Dropdown Menu, Label, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Switch, Tabs, Tooltip.

### Lucide React

- **Ícones SVG:** Fornece um conjunto de ícones modernos e customizáveis, facilitando a criação de interfaces visuais atrativas.

## Data Management & State

### @tanstack/react-query

- **Gerenciamento de estado do servidor:** Uma biblioteca poderosa para lidar com requisições de API e cache de dados de forma eficiente.
- **Sincronização automática:** Atualiza os dados automaticamente com base no estado do servidor.
- **Otimizador de performance:** Minimiza a quantidade de chamadas para APIs, mantendo a interface responsiva.

### Zustand

- **Gerenciamento de estado local:** Biblioteca leve para gerenciar estado global da aplicação de forma simples e eficiente.
- **Alternativa ao Redux:** Oferece uma API mais simples e menos boilerplate para gerenciamento de estado.

### React Hook Form

- **Gerenciamento de formulários:** Biblioteca para criar formulários performáticos e flexíveis com validação integrada.
- **Integração com Zod:** Usa `@hookform/resolvers` para validação de esquemas com Zod.

## API & Data Fetching

### Axios

- **Cliente HTTP:** Facilita as requisições para APIs, como chamadas GET, POST, PUT e DELETE.
- **Manipulação simplificada:** Garante uma interface simples para trabalhar com respostas HTTP e tratar erros.

### Kubb

- **Gerador de código:** Ferramenta para gerar código TypeScript a partir de especificações OpenAPI.
- **Plugins incluídos:** Client, OAS, React Query, TypeScript e Zod para geração automática de tipos e hooks.

## File Handling & Upload

### UploadThing

- **Sistema de upload:** Plataforma completa para upload de arquivos com suporte a múltiplos provedores de armazenamento.
- **Integração React:** Oferece componentes React prontos para uso e hooks para gerenciar uploads.

### React Dropzone

- **Interface de drag & drop:** Permite aos usuários arrastar e soltar arquivos diretamente na interface.
- **Integração com shadcn:** Usa `shadcn-dropzone` para uma experiência de upload estilizada.

## PDF Generation & Document Handling

### React PDF

- **Geração de PDFs:** Biblioteca para criar documentos PDF usando componentes React.
- **Renderização:** Permite criar PDFs complexos com componentes React nativos.
- **Fontes:** Suporte para fontes personalizadas com `@react-pdf/font`.

### jsPDF & html2canvas

- **Alternativas de PDF:** Bibliotecas adicionais para geração de PDFs a partir de HTML e canvas.
- **html2pdf.js:** Conversão direta de HTML para PDF.

## Data Visualization & Tables

### Recharts

- **Gráficos e visualizações:** Biblioteca de gráficos para React com suporte a diversos tipos de visualizações de dados.

### @tanstack/react-table

- **Tabelas avançadas:** Biblioteca para criar tabelas complexas com funcionalidades como ordenação, filtragem e paginação.

## Utilities & Helpers

### Zod

- **Validação de esquemas:** Biblioteca para validação de dados em tempo de execução com TypeScript.
- **Integração:** Usado com React Hook Form e Kubb para validação robusta.

### date-fns & dayjs

- **Manipulação de datas:** Bibliotecas para trabalhar com datas de forma eficiente e consistente.

### UUID

- **Identificadores únicos:** Geração de IDs únicos para elementos da aplicação.

### js-cookie

- **Gerenciamento de cookies:** Manipulação simplificada de cookies do navegador.

### class-variance-authority & clsx

- **Utilitários CSS:** Ferramentas para gerenciar classes CSS condicionalmente e criar variantes de componentes.

## AI Integration

### @ai-sdk/google

- **Integração com IA:** SDK para integração com serviços de inteligência artificial do Google.

## Development Tools

### BiomeJS

- **Linter e formatter:** Ferramenta all-in-one que substitui ESLint + Prettier, oferecendo linting e formatação de código.
- **Performance superior:** Até 35x mais rápido que ESLint, escrito em Rust.
- **Zero configuração:** Funciona out-of-the-box com configurações sensatas para JavaScript, TypeScript, JSX e JSON.

### PostCSS e Autoprefixer

- **Transformador CSS:** PostCSS processa o código CSS e adiciona funcionalidades como prefixos automáticos com o plugin Autoprefixer.

## Como tudo se encaixa?

1. **React + TypeScript + Vite:** Criam uma aplicação moderna, tipada e rápida.
2. **React Router:** Gerencia a navegação entre diferentes páginas da aplicação.
3. **@tanstack/react-query + Axios + Kubb:** Trabalham juntos para buscar, gerenciar e tipar dados de APIs externas.
4. **Tailwind CSS + shadcn/ui + Radix UI:** Proporcionam uma interface visual estilosa, acessível e responsiva.
5. **React Hook Form + Zod:** Garantem validação robusta de formulários.
6. **UploadThing + React Dropzone:** Facilitam o upload e gerenciamento de arquivos.
7. **React PDF + jsPDF:** Permitem geração de documentos PDF complexos.
8. **Zustand:** Gerencia estado global da aplicação de forma eficiente.
9. **BiomeJS + TypeScript:** Garantem um código limpo, confiável e bem tipado.

## Em resumo:

- **Core:** React, TypeScript e Vite para uma base sólida e moderna
- **UI/UX:** Tailwind CSS, shadcn/ui e Radix UI para interfaces acessíveis e responsivas
- **Data:** React Query, Zustand e Axios para gerenciamento eficiente de estado e APIs
- **Forms:** React Hook Form e Zod para validação robusta
- **Files:** UploadThing e React Dropzone para gerenciamento de arquivos
- **Documents:** React PDF para geração de PDFs
- **Quality:** BiomeJS para linting e formatação automática
- **AI:** Google AI SDK para funcionalidades de inteligência artificial

Essa stack é ideal para criar aplicações web modernas, escaláveis e de alta performance, focadas na experiência do usuário, acessibilidade e eficiência do desenvolvimento. A combinação de ferramentas oferece um ecossistema completo para aplicações empresariais com funcionalidades avançadas como upload de arquivos, geração de PDFs e integração com IA.
