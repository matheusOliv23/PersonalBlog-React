import Cards from './components/Cards/Card'
import Card2 from './components/Cards/Card2'
import Card3 from './components/Cards/Card3'
import Card4 from './components/Cards/Card4'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { useState } from 'react'

import Post1 from './components/Post/Post1'

import Post2 from './components/Post/Post2'
import BtnModal from './components/Modal/BtnModal'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      titulo: 'Métodos de Array: Filter',
      descricao: 'Texto',
      autor: 'Eduardo',
      data: '25/09/2021',
      texto: 'teste'
    }
  ])
  /* {
      titulo: 'Por que escolhi JavaScript',
      descricao: 'Texto',
      autor: 'Matheus',
      data: '25/09/2021',
      texto: 'texto'
    },
    {
      titulo: 'Métodos de Array: Filter',
      descricao: 'Texto',
      autor: 'Eduardo',
      data: '25/09/2021'
    },
    { titulo: 'Métodos de Array: Map', autor: 'Amanda', data: '25/09/2021' },
    { titulo: 'Métodos de Array: Reduce', autor: 'Marcos', data: '25/09/2021' }
  ])*/

  const inserirNovoPost = novoPost => {
    const novoStateDePosts = [...cards, novoPost]
    console.log('inserirNovoPost', novoStateDePosts)
    setCards(novoStateDePosts)
  }

  return (
    <>
      <Header />
      <BtnModal addPost={inserirNovoPost} />
      {cards.map(card => {
        return <Post1 conteudo={card} />
      })}
      <Card2 />
      <Card3 />
      <Footer />
    </>
  )
}

export default App
