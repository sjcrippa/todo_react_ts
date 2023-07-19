import { useState } from 'react'

import type { TodoTitle } from '../types/types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <div>
      <form
        className='flex justify-center mt-5'
        onSubmit={handleSubmit}>
        <input
          className='new-todo px-10 p-2'
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
          placeholder='¿Que quieres hacer?'
          autoFocus
        />
      </form>
    </div>
  )
}
