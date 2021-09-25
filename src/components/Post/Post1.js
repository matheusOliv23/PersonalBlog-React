import React, { useState } from 'react'
import { Artigo1 } from '../Cards/Articles/articles'

const Post1 = ({ conteudo }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="cards">
      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setShow(!show)}>{String(conteudo.titulo)}</h2>
          <div className="description"></div>
          <div>{String(conteudo.data)}</div>
          <div>{String(conteudo.autor)}</div>
          <div>{show}</div>
        </div>
      </div>
    </div>
  )
}

export default Post1
