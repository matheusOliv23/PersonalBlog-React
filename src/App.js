import Cards from './components/Cards/Card'
import Card2 from './components/Cards/Card2'
import Card3 from './components/Cards/Card3'
import Card4 from './components/Cards/Card4'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { useState } from 'react'

import Post1 from './components/Post/Post1'

import BtnModal from './components/Modal/BtnModal'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      titulo: 'Métodos de Array: Reduce',
      descricao: 'Um pouco sobre o método filter',
      autor: 'Eduardo',
      data: '25/09/2021',
      texto: `O método .reduce() executa uma função fornecida e
        retorna todo o array em apenas um único valor.`
    },
    {
      id: 2,
      titulo: 'Métodos de Array: Filter',
      descricao: 'Um pouco sobre o método filter',
      autor: 'Matheus',
      data: '25/09/2021',
      texto: `A função desse método é filtrar elementos de um Array. Passamos a ele
        uma função que, caso seja true, cria um novo Array com os elementos filtrados.
        `
    }
  ])

  const inserirNovoPost = novoPost => {
    const novoStateDePosts = [...cards, novoPost]
    setCards(novoStateDePosts)
  }

  const excluirPost = id => {
    const cardsSemArtigoExcluido = cards.filter(x => x.id !== id)
    setCards(cardsSemArtigoExcluido)
  }

  return (
    <>
      <Header />
      <BtnModal addPost={inserirNovoPost} />
      {cards.map(cards => {
        return <Post1 conteudo={cards} excluirPost={excluirPost} />
      })}
      <Footer />
    </>
  )
}

export default App
