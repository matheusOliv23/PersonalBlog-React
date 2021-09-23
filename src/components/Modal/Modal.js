import React from 'react'
import './Modal.css'

const Modal = ({ id = 'modal', children, onClose = () => {} }) => {
  const handleClick = event => {
    if (event.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
