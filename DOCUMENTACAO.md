# Documentação do Projeto: Portfolio Net

Este projeto é um portfólio profissional moderno e minimalista desenvolvido com **React** e **Vite**. Ele apresenta uma estrutura focada em performance, design limpo e interatividade através de carrosséis e animações suaves.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Build tool rápida para desenvolvimento frontend.
- **React Router Dom**: Gerenciamento de rotas (Página Inicial e Detalhes de Projeto).
- **Lucide React**: Biblioteca de ícones elegantes e leves.
- **CSS Vanilla**: Estilização personalizada focada em tipografia e layout minimalista.

## 📁 Estrutura de Pastas

```text
src/
├── assets/          # Arquivos estáticos (imagens, logotipos)
├── components/      # Componentes reutilizáveis do site
│   ├── About.jsx        # Seção "Sobre Mim"
│   ├── Contact.jsx      # Seção de Contato
│   ├── Footer.jsx       # Rodapé do site
│   ├── Hero.jsx         # Cabeçalho principal (Impacto inicial)
│   ├── Navbar.jsx       # Menu de navegação
│   ├── ScrollToTop.jsx  # Helper para resetar scroll em trocas de rota
│   ├── SkillLists.jsx   # Listas detalhadas de softwares/competências
│   ├── Skills.jsx       # Carrossel de habilidades principais
│   └── Works.jsx        # Carrossel de projetos realizados
├── pages/           # Páginas completas da aplicação
│   ├── Home.jsx           # Landing page principal
│   └── ProjectDetails.jsx # Página de detalhes de cada projeto
├── App.jsx          # Configuração de rotas
└── index.css        # Estilos globais e sistema de design
```

## 🧩 Componentes Principais

### 1. `Skills.jsx`
Exibe as habilidades centrais em um carrossel auto-play. Cada card contém um ícone, título e uma breve descrição. É responsivo, alternando entre 1 ou 2 cards visíveis.

### 2. `Works.jsx`
Seção de portfólio que utiliza um carrossel para mostrar projetos. Os itens são clicáveis e levam à página de detalhes do projeto através do ID.

### 3. `Navbar.jsx`
Implementa navegação por âncoras para seções na mesma página (`#about`, `#works`, etc.) e navega de volta para a Home caso o usuário esteja em uma subpágina.

### 4. `index.css`
Contém variáveis de cores, fontes (Google Fonts) e classes utilitárias para garantir consistência visual em todo o projeto.

## 🛠️ Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Gere a versão de produção:
   ```bash
   npm run build
   ```
