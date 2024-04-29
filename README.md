## Desafio Imagens 3D com three.js

Este é um projeto React Native desenvolvido utilizando o Expo, uma ferramenta que simplifica o processo de desenvolvimento e build de aplicativos móveis. O aplicativo utiliza uma variedade de tecnologias para fornecer uma experiência rica e interativa aos usuários. Algumas dessas tecnologias incluem:
- Firebase Authentication: Para autenticação de usuários e gerenciamento de sessões de login.
- three.js: Uma biblioteca JavaScript para criar e exibir gráficos 3D interativos no navegador.
- Realtime Database (Firebase): Utilizado para armazenar e sincronizar dados em tempo real entre os diferentes clientes do aplicativo.
- Async Storage: Para armazenamento local de dados sensíveis, como informações de login e preferências do usuário.
- Expo Router: Para a navegação entre as diferentes telas do aplicativo de forma eficiente.
- Jest: Uma estrutura de teste de JavaScript para testes unitários dos componentes do aplicativo.

## Funcionalidades Desenvolvidas
- Login com Firebase Authentication e Async Storage: Permite que os usuários façam login no aplicativo, com a capacidade de manter o usuário logado utilizando o Async Storage.
- Objetos 3D e OrbitControl: Implementação de 3 objetos 3D que podem ser manipulados usando OrbitControl do three.js.
- Configurações Salvas no Realtime Database: As configurações dos objetos são iniciadas com configurações salvas no Realtime Database.
- Tela de Configuração para Cada Objeto: Implementação de uma tela de configuração para cada objeto, permitindo configurar cor, tipo de objeto e rotação nos eixos x, y e z, com as configurações sendo salvas no banco.
- Função de Logout do Usuário: Permite que os usuários façam logout de suas contas.
- Testes Unitários com Jest: Foram realizados testes unitários nos componentes utilizando Jest.
- Dark e Light Theme: O aplicativo possui suporte a Dark e Light theme, seguindo a configuração do celular do usuário.
- Configurações de Acessibilidade: Implementação de configurações de acessibilidade para melhorar a experiência do usuário.

### Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
- Expo CLI: Instale o Expo CLI globalmente em sua máquina utilizando o seguinte comando:
npm install -g expo-cli

### Instalação

1. Clone este repositório para o seu ambiente local:
git clone https://github.com/seu-usuario/nome-do-projeto.git

2. Navegue até o diretório do projeto:
cd nome-do-projeto

3. Instale as dependências do projeto utilizando o npm ou o yarn:
npm install ou yarn install

### Configuração do Firebase

Antes de executar o aplicativo, certifique-se de adicionar as configurações do Firebase no arquivo `Firebase.ts`. Você pode encontrar essas configurações na sua conta do Firebase.

Certifique-se de incluir as seguintes informações no arquivo `Firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_DOMINIO.firebaseio.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

### Executando o aplicativo

Para iniciar o aplicativo em um ambiente de desenvolvimento, execute o seguinte comando:
npx expo start
