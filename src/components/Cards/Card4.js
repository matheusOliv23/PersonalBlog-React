import React, { useState } from 'react'
import { Artigo4 } from './Articles/articles'

const Card4 = () => {
  const [myCard4, setMycard4] = useState('')
  return (
    <div className="cards">
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

export default Card4
