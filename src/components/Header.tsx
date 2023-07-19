import type { TodoTitle } from '../types/types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>Todo
       {/*  <img src="https://logospng.org/wp-content/uploads/typescript.png" alt="ts logo" /> */}
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
