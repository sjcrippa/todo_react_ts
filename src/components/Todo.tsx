import { type Todo as TodoType } from '../types/types'

// type Props = TodoType
interface Props extends TodoType {
  onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className='flex gap-5 justify-center items-center'>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => { }} />
      <label className='text-2xl'>{title}</label>
      <button
        className="text-red-500"
        onClick={() => { onRemoveTodo(id) }}
      >X</button>
    </div>
  )
}
