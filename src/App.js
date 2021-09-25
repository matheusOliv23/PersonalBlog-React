import Cards from './components/Cards/Card'
import Card2 from './components/Cards/Card2'
import Card3 from './components/Cards/Card3'
import Card4 from './components/Cards/Card4'

import Header from './components/Header/Header'

import { useState } from 'react'

import Post1 from './components/Post/Post1'

import Post2 from './components/Post/Post2'
import BtnModal from './components/Modal/BtnModal'

function App() {
  const [cards, setCards] = useState([
    {
      titulo: 'Por que escolhi JavaScript',
      autor: 'Matheus',
      data: '25/09/2021'
    },
    {
      titulo: 'Métodos de Array: Filter',
      autor: 'Eduardo',
      data: '25/09/2021'
    },
    { titulo: 'Métodos de Array: Map', autor: 'Amanda', data: '25/09/2021' },
    { titulo: 'Métodos de Array: Reduce', autor: 'Marcos', data: '25/09/2021' }
  ])

  const post1 = 'Meu texto'
  const post2 = 'Meu segundo texto'
  const [posts, setPosts] = useState([post1, post2])

  const inserirNovoPost = novoPost => {
    const novoStateDePosts = [...posts, novoPost]
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
      <Post2 />
    </>
  )
}

export default App
