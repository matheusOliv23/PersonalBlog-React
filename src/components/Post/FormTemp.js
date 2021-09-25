import React from 'react'
import { useState } from 'react/cjs/react.development'

const FormTemp = () => {
  const [form, setForm] = useState('')

  const handleChange = e => {
    setForm(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  const handleClick = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={form} onChange={handleChange} />
      </label>
      <input type="submit" value="Enviar" onClick={() => setForm(form + 1)} />
      <p>Nome:</p>
    </form>
  )
}

export default FormTemp
