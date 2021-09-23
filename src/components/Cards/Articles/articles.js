import React from 'react'

export const Artigo1 = () => {
  return (
    <div>
      <h1>JavaScript: Por que?</h1>
      <article class="article">
        Nesse artigo, irei abordar os motivos que me fizeram escolher o
        JavaScript como minha principal linguagem de programação.
      </article>
      <article class="article">
        Quando iniciamos no mundo da programação, uma das primeiras coisas que
        pesquisamos na internet é: "qual linguagem começar?". Na verdade, o que
        estamos tentando fazer é encontrar um guia que nos dê um caminho neste
        vasto universo da
        <strong>Programação</strong>.
      </article>
      <article class="article">
        Antes de conhecer o JavaScript, eu havia feito um curso na internet de{' '}
        <strong>HTML</strong> e <stron>CSS</stron>. Não conhecia muito bem esse
        mundo do desenvolvimento web até então. Mexendo com o desenvolvimento de
        sites no curso, eu acabei me descobrindo em um mundo completamente novo
        para mim, com muitas possibilidades diferentes. Eu poderia criar o que
        eu imaginasse, desde que soubesse como fazer. Desde então, pesquisei
        muito sobre qual linguagem de programação começar e foi ai que descobri
        ela:
        <strong>JavaScript</strong>.
      </article>
      <h1>Afinal, Javascript é difícil?</h1>
      <article class="article">
        A sintaxe dessa linguagem é bem simples e, com alguns minutos de código,
        você já começa a obter resultados de imediato! Além de simples, sua
        sintaxe também é bem bonita e não requer que você declare o tipo das
        variáveis.
      </article>
      <img src="/" class="img-article" alt="exemplo de codigo" />
      <article class="article">
        Vejam no código acima que eu defini uma constante 'nome' e 'idade' sem
        precisar dizer que 'nome' é uma <strong>String</strong> e 'idade' é um{' '}
        <strong>Number</strong>. A forma como eu escrevo os códigos definirão
        como o JavaScript lidará com eles.
      </article>
    </div>
  )
}

export const Artigo2 = () => {
  return (
    <div>
      <h1>Filter: .filter()</h1>
      <article class="article">
        A função desse método é filtrar elementos de um Array. Passamos a ele
        uma função que, caso seja
        <strong>true</strong>, cria um novo Array com os elementos filtrados.
        Vejamos um exemplo:
      </article>
      <img
        src="../../../filter.png"
        alt="exemplo de codigo"
        class="img-article"
      />
      <article class="article">
        No exemplo acima, criamos um array de objetos e filtramos os usuários
        que sabem a linguagem JavaScript. Claro, o filter pode ficar bem mais
        complicado, mas vemos que funcionalidades simples podem ser
        implementadas de uma forma bem fácil.
      </article>
      <article class="article">
        O <strong>.filter()</strong> possui três argumentos. São eles: o{' '}
        <strong>valor</strong> do elemento, o<strong>índice</strong> do elemento
        e o<strong>array</strong> do elemento.
      </article>
      <article class="article">
        Algo muito importante que precisa ser levado em conta nessa função
        .filter() é que, se adicionarmos mais elementos ao array após a
        invocação do <strong>filter()</strong>, esses novos elementos não serão
        adicionados.
      </article>
    </div>
  )
}

export const Artigo3 = () => {
  return (
    <div>
      <h1>Map: .map()</h1>
      <article class="article">
        A função desse método é criar um novo array com os valores modificados.
      </article>
      <img
        src="./assets/img/map.png"
        alt="exemplo de codigo"
        class="img-article"
      />
      <article class="article">
        No exemplo acima, criamos um array de números. Criamos uma outra
        variável chamada 'double' cuja função é dobrar os números do array
        'números'. Perceba como foi fácil resolver esse problema utilizando o
        map, com uma sintaxe bem simples e fácil de entender.
      </article>
      <article class="article">
        O <strong>.map()</strong> possui três argumentos. São eles: o
        <strong>valor</strong> do elemento, o<strong>índice</strong> do elemento
        e o<strong>array</strong> do elemento.
      </article>
    </div>
  )
}

export const Artigo4 = () => {
  return (
    <div>
      <h1>Reduce: .reduce()</h1>
      <article class="article">
        O método <strong>.reduce()</strong> executa uma função fornecida e
        retorna todo o array em apenas um único valor.
      </article>
      <img
        src="./assets/img/reduce.png"
        alt="exemplo de codigo"
        class="img-article"
      />
      <article class="article">
        No exemplo acima, criamos um array de números. Criamos uma constante
        chamada 'soma' cuja função é retornar a soma dos valores do array
        'numeros'.
        <article class="article">
          O valor de retorno da sua função reducer é atribuída ao acumulador. O
          acumulador, com o seu valor atualizado, é repassado para cada iteração
          subsequente pelo array, que por fim, se tornará o valor resultante
          final.
        </article>
        <article class="article">
          Não é difícil perceber como é uma função bem poderosa para somar
          valores de um array.
        </article>
      </article>
      <article class="article">
        O <strong>.reduce()</strong> possui quatro parâmetros. São eles: o{' '}
        <strong>acumulador</strong> do elemento, o<strong>valor</strong> do
        elemento, o<strong>indice</strong> do elemento e seu
        <strong>array</strong> original
      </article>
    </div>
  )
}
