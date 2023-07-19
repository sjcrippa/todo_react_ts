import type { TodoTitle } from '../types/types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='container mt-10 mx-auto'>
      <div className='w-full flex justify-center items-center gap-5'>
        <img className='w-44' src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png" alt="ts logo" />
      </div>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
