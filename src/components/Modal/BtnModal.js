import React, { useState } from 'react'
import Form from '../Form/Form'
import Modal from './Modal'

const BtnModal = ({ addPost }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="new-blog">
        Novo Blog
      </button>
      {isOpen ? (
        <Modal onClose={() => setIsOpen(false)}>
          <Form setIsOpen={setIsOpen} addPost={addPost} />
        </Modal>
      ) : null}
    </div>
  )
}

export default BtnModal
