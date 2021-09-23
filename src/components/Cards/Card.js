import React, { useState } from 'react'
import { Artigo1, Artigo2, Artigo3, Artigo4 } from './Articles/articles'
import './Card.css'

const Cards = () => {
  const [myCard, setMycard] = useState('')
  const [myCard2, setMycard2] = useState('')
  const [myCard3, setMycard3] = useState('')
  const [myCard4, setMycard4] = useState('')

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

      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <a className="title">
            <h2 onClick={() => setMycard2(card => !card)}>
              Métodos de Array: Filter
            </h2>
          </a>
          <div className="description">Um pouco sobre o método Filter</div>
          <div>Publicado em 20/09/2021</div>
          <div>Autor: Matheus Oliveira</div>
          <div>{myCard2 && <Artigo2 />}</div>
        </div>
      </div>

      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setMycard3(card => !card)}>
            Métodos de Array: Map
          </h2>

          <div className="description">Um pouco sobre o método Map</div>
          <div>Publicado em 20/09/2021</div>
          <div>Autor: Matheus Oliveira</div>
          <div>{myCard3 && <Artigo3 />}</div>
        </div>
      </div>

      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setMycard4(card => !card)}>
            Métodos de Array: Reduce
          </h2>

          <div className="description">Um pouco sobre o método Reduce</div>
          <div>Publicado em 20/09/2021</div>
          <div>Autor: Matheus Oliveira</div>
          <div>{myCard4 && <Artigo4 />}</div>
        </div>
      </div>
    </div>
  )
}

export default Cards
