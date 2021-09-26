import React, { useState } from 'react'

const Post1 = ({ conteudo }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="cards">
      <div className="custom-card">
        <div className="img-card"></div>
        <div className="card-text">
          <h2 onClick={() => setShow(!show)}>{String(conteudo.titulo)}</h2>
          <div className="description">{String(conteudo.descricao)}</div>
          <div>Publicado em: 25/09/2021 </div>
          <div>{String(conteudo.autor)}</div>
          <div>{show && String(conteudo.texto)}</div>
          <button onClick={() => setShow('')} className="btn-delete">
            Deletar Artigo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post1
