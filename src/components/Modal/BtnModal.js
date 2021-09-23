import React, { useState } from 'react'
import Form from '../Form/Form'
import Modal from './Modal'

const BtnModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="new-blog">
        Novo Blog
      </button>
      {isOpen ? (
        <Modal onClose={() => setIsOpen(false)}>
          <Form />
        </Modal>
      ) : null}
    </div>
  )
}

export default BtnModal
