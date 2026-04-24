## 🎬 Consulta e Exibição de Filmes
´´´ 
# 📖 Descrição

Aplicativo desenvolvido em React Native que permite ao usuário pesquisar filmes utilizando a API do The Movie Database (TMDB).

O sistema oferece uma interface simples e intuitiva para busca, exibe uma lista de filmes encontrados e permite visualizar detalhes completos de cada filme selecionado.
´´´
# 🚀 Funcionalidades
- 🔍 Buscar filmes pelo nome
- 📃 Listar resultados com:
- Poster
- Título
- Data de lançamento
- Breve descrição
- 🎥 Visualizar detalhes do filme:
- Imagem ampliada
- Nota (avaliação)
- Sinopse completa
- 🔙 Navegação entre telas (Home → Detalhes)
- 🧹 Limpar busca
- ✨ Animações na interface
- 📡 Consumo de API externa (TMDB)
´´´
# 🛠️ Tecnologias Utilizadas
- React Native
- Expo
- React Navigation
- API TMDB
- JavaScript (ES6+)
´´´
# 📁 Estrutura do Projeto
/components
  └── MovieCard.js

/screens
  ├── HomeScreen.js
  └── DetailsScreen.js

App.js
index.js
´´´
# ▶️ Como Executar o Projeto
1. Clone o repositório
git clone <url-do-repositorio>
2. Acesse a pasta
cd nome-do-projeto
3. Instale as dependências
npm install
4. Instale o React Navigation (caso necessário)
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
5. Inicie o projeto
npx expo start
´´´
# 🔑 Configuração da API

O projeto utiliza a API do TMDB.

No arquivo HomeScreen.js, substitua pela sua chave:

const API_KEY = "SUA_API_KEY_AQUI";

Você pode obter uma chave gratuita em:
https://www.themoviedb.org/
´´´
# 📱 Telas do Aplicativo
- 🏠 Home
- Campo de busca
- Botões de buscar e limpar
- Lista de filmes encontrados
# 🎬 Detalhes
- Poster do filme
- Título
- Avaliação
- Sinopse
- Botão de voltar
# ⚠️ Observações
Caso ocorra erro de bundling, execute:
npx expo start -c .
Certifique-se de que todas as dependências estão instaladas corretamente.
´´´
# 📌 Créditos

Dados fornecidos por:
The Movie Database (TMDB)
´´´
# 👨‍💻 Autor

- Natália da Silva Fernandes
- Desenvolvido para fins acadêmicos e prática com React Native.