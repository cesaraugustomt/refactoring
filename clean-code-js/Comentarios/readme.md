# Como usar comentários da forma certa.

## Forma errada
comentários são um vício ruim muita das vezes para acobertar código ruim.

Exemplo clássico:
```
// Comparando se tal coisa é igual a true, e outra coisa e false, e isso é maior que 3
// Para fazer tal coisa!
if(talCoisa === true && outraCoisa === false && isso > 3){

}

```

Nesse caso o programador prefere escrever o comentário do que criar um código que 
se explica sozinho. Porque o certo é o seu código se explicar sozinho.

O certo é o seu código ter contexto suficiente para ele ser expressivo o suficiente
para assim que outro programador olhe pro seu código só de olhar pro seu código ele
entenda o que está acontencendo.

Quando você está trabalhando e não estudando esse tipo de prática é errada.

Seu código é tão sem contexto que você precisa colocar um comentário para explicar
ele.

## Forma correta

A forma correta é usar comentário para **explicar regra de negócio**.

Exemplo imagine uma regra de negócio complexa dentro de uma instituição financeira:
```
/* 
    Função que entra em contato com a API do banco do brasil
    Para calcular as taxas corretas para cobrança de produtos
    No Boleto.
    Essa função deve receber: ... ... ...
    E retorna: O Valor da nota com todos os descontos.
*/
```