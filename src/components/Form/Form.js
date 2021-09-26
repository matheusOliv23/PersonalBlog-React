import React, { useState } from 'react'
import './Form.css'

const Form = ({ addPost, setIsOpen }) => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [autor, setAutor] = useState('')
  const [texto, setTexto] = useState('')

  const handleSubmit = event => {
    addPost({
      titulo,
      descricao,
      autor,
      texto
    })
    setIsOpen(false)
  }

  return (
    <div>
      <h1>Novo Blog</h1>

      <div className="form">
        <label>Título</label>
        <input
          value={titulo}
          required
          type="text"
          onChange={e => setTitulo(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Descrição</label>
        <input
          value={descricao}
          type="text"
          required
          onChange={e => setDescricao(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Autor</label>
        <input
          value={autor}
          type="text"
          required
          onChange={e => setAutor(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Conteúdo</label>
        <textarea
          required
          className="text-area"
          value={texto}
          onChange={e => setTexto(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleSubmit} className="btn-sub">
        Criar Blog
      </button>
    </div>
  )
}

export default Form
