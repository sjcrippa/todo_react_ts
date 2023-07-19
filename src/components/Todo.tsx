import type { TodoId, Todo as TodoType } from '../types/types'

// type Props = TodoType
interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = (
  { id, title, completed, onRemoveTodo, onToggleCompleteTodo }
) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className='flex gap-5 justify-center items-center'>
      <input
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox} />
      <label className='text-2xl'>{title}</label>
      <button
        className="text-red-500"
        onClick={() => { onRemoveTodo({ id }) }} // en js, esta linea de codigo sin el id dentro de los parentesis, no devolveria ningun error y aun asi fallaria. En TS esto no pasa, si o si tenes que pasarle el id para que funcione.
      // Que se podria hacer para simplificar el traspaso del onRemove para evitar un 'prop-drilling'??????
      >X</button>
    </div>
  )
}
