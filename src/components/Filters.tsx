import { FILTERS_BUTTONS } from '../consts'
import type { FilterValue } from '../types/types'

interface Props {
  /* // dentro de filterSelected tenemos que inidicar cuales son las opciones posibles, es decir aquellas que colocamos en el archivo consts.ts
  // una manera, poco practica porque en el caso de querer agregar mas keys, dificularia todo, es la siguiente:

  // filterSelected: 'all' | 'active' | 'completed'

  // otra manera, mas pro, que luego nos permitira agregar mas keys, es la siguiente:

  // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

  // lo de arriba quiere decir, utiliza una de las keys del tipo TODO_FILTERS y luego a esa key, volve a sacarle el tipo para que se almacene en el filterSelected. El keyof es cualquier key del objeto en cuestion. */
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  return (
    <div>
      <ul>
        {
          Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
            const isSelected = key === filterSelected
            const className = isSelected ? 'selected' : ''

            return (
              <li key={key}>
                <a
                  href={href}
                  className={className}
                  onClick={(event) => {
                    event.preventDefault()
                    onFilterChange(key as FilterValue)
                  }}
                >
                  {literal}
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
