import type { Todo as TodoType, ListOfTodos, TodoId } from '../types/types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

// <Props> despues del react.FC (react functional component) es una fomra de pasar parametros, le estamos diciendo a TS que la forma de nuestras props es GENERICO, ya que puede tomar cualquier valor. De  esta manera, tipamos el codigo.

export const Todos: React.FC<Props> = (
  { todos, onRemoveTodo, onToggleCompleteTodo }
) => {
  return (
    <div className='container mx-auto my-52 bg-white'>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onToggleCompleteTodo={onToggleCompleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
