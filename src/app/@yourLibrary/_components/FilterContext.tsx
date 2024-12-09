'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

export type IFilterType = 'ALBUM' | 'ARTIST'

interface ContextProps {
  filter: IFilterType
  setFilter: Dispatch<SetStateAction<IFilterType>>
}

const FilterContext = createContext<ContextProps | undefined>(undefined)

interface FilterProviderProps {
  children: ReactNode
  defaultFilter: IFilterType
}

export const FilterProvider = ({
  children,
  defaultFilter,
}: FilterProviderProps) => {
  const [filter, setFilter] = useState<IFilterType>(defaultFilter)

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter],
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) throw new Error('Error at useFilter')

  return context
}
