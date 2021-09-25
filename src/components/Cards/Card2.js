import React, { useState } from 'react'
import { Artigo2 } from './Articles/articles'

const Card2 = () => {
  const [myCard2, setMycard2] = useState('')

  return (
    <div className="cards">
      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setMycard2(card => !card)}>
            Métodos de Array: Filter
          </h2>
          <div className="description">Um pouco sobre o método Filter</div>
          <div>Publicado em 20/09/2021</div>
          <div>Autor: Matheus Oliveira</div>
          <div>{myCard2 && <Artigo2 />} </div>
        </div>
      </div>
    </div>
  )
}

export default Card2
