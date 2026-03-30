# CursoCompleto

# Instalação do ESlint

no terminal: npm install eslint@latest --save-dev

no package.json: "lint": "ng lint"

no terminal: npm run lint (vai perguntar se quer instalar o lint)

no terminal: npm install --save-dev lint-staged (para rodar o lint apenas em arquivos que foram alterados, e não em todos do projeto)

no terminal: npm install --save-dev husky

no terminal: npx husky init

no pre-commit: npm run lint-staged

# Instalação do Prettier

no terminal: npm install --save-dev --save-exact prettier

no package.json: "format": "prettier --write \"src/\*_/_.{ts,html,css}\"",

no pre-commit: npm run format
