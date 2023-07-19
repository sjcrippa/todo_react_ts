import type { FilterValue } from '../types/types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <div className='text-white flex gap-10 items-center justify-center'>
      <footer>
        <span>
          <p>{activeCount} tareas pendientes</p>
        </span>
      </footer>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className='completed text-white'
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </div>
  )
}
