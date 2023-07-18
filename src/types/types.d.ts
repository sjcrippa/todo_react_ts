// el .d dentro de la ruta del archivo quiere decir que dentro de este codigo, solo habra DECLARACIONES, es decir, no va a haber codigo, solo declaraciones.

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
