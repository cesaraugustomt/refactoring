# Padronização - Prettier e ESLint Os seus melhores amigos quando o assunto é Clean Code


## Prettier

O [prettier](https://prettier.io/) é uma extensão para editores de código 
com o vscode e essa extensão nos ajuda a manter um código mais limpo e padronizado. O que o prettier faz é formatar o código em um padrão definido por ele.

O Padrão no JavaScript é usar aspas duplas.

```bash
.prettierrc

{
"singleQuote": false,  /* força ter aspas simples */
"printWidth": 80  /* tamanho máximo de uma linha até acontecer a quebra */
}

```

## Eslint
O [eslint](https://eslint.org/) é uma biblioteca javascript que nos ajuda não somente a manter um padrão visual como a evitar até mesmo erros de lógica.

```bash
$ npm init @eslint/config@latest
```
Um dos erros que o eslint detecta:

- 'aff' is assigned a value but never used. detectar váriaveis que não
estão sendo usadas.

- Unexpected constant condition. Ele acusa que não faz sentido essa linha de código.
```
if (true) {
  console.log('safasd');
}
```

## Regras que o eslint usa:

[Rules Reference ESLint](https://eslint.org/docs/latest/rules/)


podemos usar o .editorconfig para ajuda na formatação de arquivos
no vscode:

```
#.editorconfig
# top-most EditorConfig file
root = true #está na raiz do projeto

[*] #as opções vão ser utilizadas em todos os arquivos
indent_style = space #tipo de identação
indent_size = 2 #quantidade de espaço
end_of_line = lf #fim da linha 
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```