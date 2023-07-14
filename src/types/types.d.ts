// el .d dentro de la ruta del archivo quiere decir que dentro de este codigo, solo habra DECLARACIONES, es decir, no va a haber codigo, solo declaraciones.

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
