'use client'

import { twMerge } from 'tailwind-merge'
import { IFilterType, useFilter } from '../FilterContext'

const FilterButton = ({ type }: { type: IFilterType }) => {
  const { filter, setFilter } = useFilter()
  const handleClick = () => {
    setFilter(type)
    document.cookie = `left-panel:filter=${type}`
  }

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'rounded-full px-3 py-1 text-xs text-gray-0',
        type === filter
          ? 'bg-gray-0 text-gray-900'
          : 'bg-gray-400 hover:bg-gray-300',
      )}
    >
      {type === 'ALBUM' ? 'Albums' : 'Artists'}
    </button>
  )
}

const FilterType = () => {
  return (
    <div className="flex gap-2 px-3">
      <FilterButton type="ALBUM" />
      <FilterButton type="ARTIST" />
    </div>
  )
}

export default FilterType
