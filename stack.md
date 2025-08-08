# My Stack - ReactJS Application

## Sobre a Stack escolhida

Uma **stack** em desenvolvimento web é um conjunto de tecnologias que trabalham juntas para construir uma aplicação. No caso desta aplicação ReactJS, temos um conjunto de ferramentas modernas e otimizadas para o desenvolvimento de interfaces rápidas, responsivas e escaláveis.

Abaixo, descrevemos cada componente da stack e como eles se integram para criar esta aplicação:

### React
* **Linguagem de interface:** Serve como a base para toda a aplicação, fornecendo os componentes e a estrutura para construção de interfaces.
* **Biblioteca declarativa:** React permite criar UIs baseadas no estado e no comportamento dinâmico da aplicação.
* **Componentização:** Facilita o reuso de partes do código, aumentando a manutenibilidade e a escalabilidade do projeto.
* **Versão:** Esta aplicação usa React 18.3.1, a versão mais recente e otimizada para desempenho.

### Vite
* **Empacotador de módulos:** Ferramenta de build ultrarrápida para aplicações web modernas.
* **Desenvolvimento otimizado:** Oferece hot-module replacement (HMR) e builds instantâneos, permitindo um fluxo de desenvolvimento fluido.
* **Configuração simplificada:** Com Vite, não é necessário configurar manualmente ferramentas como Webpack.

### React Router
* **Gerenciador de rotas:** Permite a criação de navegação dentro da aplicação, lidando com páginas diferentes sem recarregar o navegador.
* **Versão:** React Router 7.1.3 é usada para rotas modernas e otimizadas.

### Tailwind CSS
* **Framework de estilos:** Um framework CSS utilitário para criar interfaces personalizadas de maneira rápida e eficiente.
* **Estilo baseado em classes:** Cada classe aplica um único estilo, permitindo o design de componentes diretamente no HTML/JSX.
* **Complemento com tailwind-merge:** O pacote `tailwind-merge` é usado para combinar classes do Tailwind, evitando conflitos de estilo.

### shadcn
* **Componentes de UI:** Uma coleção de componentes acessíveis e altamente customizáveis, construídos sobre Radix UI e Tailwind CSS.
* **Facilidade de uso:** Componentes prontos para uso, permitindo criação rápida de interfaces com design moderno.
* **Extensível e modular:** Permite personalização total dos componentes para atender às necessidades específicas da aplicação.

### @tanstack/react-query
* **Gerenciamento de estado do servidor:** Uma biblioteca poderosa para lidar com requisições de API e cache de dados de forma eficiente.
* **Sincronização automática:** Atualiza os dados automaticamente com base no estado do servidor.
* **Otimizador de performance:** Minimiza a quantidade de chamadas para APIs, mantendo a interface responsiva.

### Axios
* **Cliente HTTP:** Facilita as requisições para APIs, como chamadas GET, POST, PUT e DELETE.
* **Manipulação simplificada:** Garante uma interface simples para trabalhar com respostas HTTP e tratar erros.

### Lucide React
* **Ícones SVG:** Fornece um conjunto de ícones modernos e customizáveis, facilitando a criação de interfaces visuais atrativas.

### BiomeJS
* **Linter e formatter:** Ferramenta all-in-one que substitui ESLint + Prettier, oferecendo linting e formatação de código.
* **Performance superior:** Até 35x mais rápido que ESLint, escrito em Rust.
* **Zero configuração:** Funciona out-of-the-box com configurações sensatas para JavaScript, TypeScript, JSX e JSON.

### TypeScript
* **Superset do JavaScript:** Introduz tipagem estática, ajudando a prevenir erros comuns e a melhorar a produtividade durante o desenvolvimento.
* **Versão:** TypeScript 5.6.2 fornece as ferramentas mais recentes para tipagem robusta.

### PostCSS e Autoprefixer
* **Transformador CSS:** PostCSS processa o código CSS e adiciona funcionalidades como prefixos automáticos com o plugin Autoprefixer.

## Como tudo se encaixa?

1. **React com Vite:** O React cria a estrutura base da aplicação, enquanto o Vite agiliza o desenvolvimento e o processo de build.
2. **React Router:** Gerencia a navegação entre diferentes páginas da aplicação sem recarregar a página.
3. **@tanstack/react-query e Axios:** Trabalham juntos para buscar e gerenciar dados de APIs externas.
4. **Tailwind CSS e shadcn:** Proporcionam uma interface visual estilosa, com componentes prontos para uso e estilos responsivos.
5. **BiomeJS e TypeScript:** Garantem um código limpo e confiável, com tipagem estática e validações automáticas.

## Em resumo:

* **React e Vite:** Criam uma aplicação moderna e rápida.
* **React Router:** Gerencia a navegação da aplicação.
* **Axios e React Query:** Facilitam a integração com APIs externas.
* **Tailwind CSS e shadcn:** Garantem uma interface responsiva e estilosa.
* **TypeScript e BiomeJS:** Aumentam a confiabilidade e a qualidade do código.

Essa stack é ideal para criar aplicações web modernas, escaláveis e de alta performance, focadas na experiência do usuário e na eficiência do desenvolvimento.
