import { type ListOfTodos } from '../types/types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
}
// <Props> despues del react.FC (react functional component) es una fomra de pasar parametros, le estamos diciendo a TS que la forma de nuestras props es GENERICO, ya que puede tomar cualquier valor. De  esta manera, tipamos el codigo.
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
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
          />
        </li>
      ))}
    </ul>
  )
}
