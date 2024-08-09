# Projeto Integrador - Sistema de Gerenciamento de Manutenção

## **Visão Geral**

Este projeto é uma aplicação web desenvolvida para gerenciar as atividades de manutenção de uma grande empresa industrial que fabrica peças automotivas. O sistema visa otimizar os processos de manutenção preventiva e corretiva, melhorando a comunicação, organização e controle de todo o parque de máquinas da empresa.

A aplicação é construída com [Next.js](https://nextjs.org/), um framework React para construção de interfaces modernas e eficientes. O sistema permite o gerenciamento completo de máquinas, manutenções, estoque de peças e equipes de manutenção, além de oferecer recursos avançados de autenticação e autorização.

## **Funcionalidades**

### **Gerenciamento de Máquinas**

- Cadastro completo de máquinas, com informações detalhadas como nome, tipo, modelo, data de fabricação, número de série, localização e histórico de manutenção.
- Visualização detalhada de cada máquina, incluindo o histórico de manutenções e as peças e materiais utilizados.

### **Gerenciamento de Manutenções**

- Cadastro de solicitações de manutenção, com informações sobre o problema, data da solicitação, prioridade, responsável e status da manutenção.
- Gerenciamento do status das manutenções, com possibilidade de adicionar comentários e arquivos relacionados.
- Atribuição de equipes de manutenção às solicitações.
- Registro de peças e materiais utilizados durante as manutenções.
- Geração de relatórios de manutenção por máquina, período e tipo de manutenção.

### **Controle de Estoque de Peças**

- Cadastro de peças de reposição com informações como nome, código, fornecedor, quantidade em estoque e valor unitário.
- Registro de entrada e saída de peças, com data e quantidade.
- Visualização do estoque em tempo real e geração de relatórios de estoque.

### **Gerenciamento de Equipes**

- Cadastro de equipes de manutenção com informações sobre os colaboradores e suas especialidades.
- Atribuição de equipes às solicitações de manutenção.
- Gerenciamento da disponibilidade dos colaboradores.

### **Autenticação e Autorização**

- Criação de contas de usuário com diferentes níveis de acesso (administrador, técnico, etc.).
- Controle de acesso a funcionalidades específicas da aplicação, de acordo com o perfil do usuário.

## **Requisitos Não Funcionais**

- **Interface Amigável e Intuitiva:** A aplicação possui uma interface fácil de usar, intuitiva e acessível para todos os usuários, independentemente do nível de conhecimento técnico.
- **Responsividade:** A aplicação é totalmente responsiva, funcionando perfeitamente em computadores, tablets e smartphones.
- **Segurança:** Medidas de segurança robustas foram implementadas para proteger os dados e evitar acessos não autorizados, garantindo a integridade do sistema.
- **Desempenho:** O sistema foi otimizado para garantir uma performance rápida e eficiente, mesmo com um grande volume de dados.

## **Começando**

### **Pré-requisitos**

Certifique-se de ter o Node.js instalado em sua máquina. Este projeto foi criado com Next.js, e você pode iniciar a aplicação localmente seguindo os passos abaixo.

### **Instalação**

Clone o repositório e navegue até o diretório do projeto:

```bash
git clone https://github.com/lucasgearhead/Web-Mainteance-App.git
cd frontend
```

Instale as dependências necessárias:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

### **Rodando o Servidor de Desenvolvimento**

Após instalar as dependências, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

### **Edição e Atualização**

Você pode começar a editar as páginas modificando `app/page.tsx`. A página será atualizada automaticamente à medida que você fizer as edições.

## **Aprenda Mais**

Para saber mais sobre o Next.js, confira os recursos abaixo:

- [Documentação do Next.js](https://nextjs.org/docs) - Saiba mais sobre as funcionalidades e APIs do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo sobre Next.js.

Você também pode acessar o [repositório do Next.js no GitHub](https://github.com/vercel/next.js/), onde sua contribuição e feedback são bem-vindos!

## **Implantação no Vercel**

A maneira mais fácil de implantar sua aplicação Next.js é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos desenvolvedores do Next.js.

Confira a [documentação sobre implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).
