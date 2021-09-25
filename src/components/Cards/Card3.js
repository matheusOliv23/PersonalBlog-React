import React, { useState } from 'react'
import { Artigo3 } from './Articles/articles'

const Card3 = () => {
  const [myCard3, setMycard3] = useState('')

  return (
    <div className="cards">
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
    </div>
  )
}

export default Card3
