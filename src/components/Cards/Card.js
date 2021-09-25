import React, { useState } from 'react'
import { Artigo1 } from './Articles/articles'
import './Card.css'

const Cards = () => {
  const [myCard, setMycard] = useState('')

  return (
    <div className="cards">
      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setMycard(card => !card)}>
            Por que escolhi JavaScript
          </h2>
          <div className="description">
            Porque você deveria aprender JavaScript
          </div>
          <div>Publicado em 20/09/2021</div>
          <div>Autor: Matheus Oliveira</div>
          <div>
            <p>{myCard && <Artigo1 />}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
