'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoFileTraySharp } from 'react-icons/io5'
import { LiaTimesSolid } from 'react-icons/lia'
import { twMerge } from 'tailwind-merge'
import { debounce } from 'lodash'

const Search = () => {
  const [value, setValue] = useState<string>('')

  const onSearch = useCallback((searchTerm: string) => {
    console.log('Search >> ', searchTerm)
  }, [])

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        onSearch(searchTerm)
      }, 300),
    [onSearch],
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setValue(value)
      debouncedSearch(value)
    },
    [debouncedSearch],
  )

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <Link
      href="/search"
      className="flex h-10 min-w-[500px] items-center justify-between rounded-full bg-gray-500 px-3 text-gray-200"
    >
      <FiSearch size="1.5rem" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What do you want to play?"
        className={twMerge(
          'm-2 mr-2.5 flex-1 bg-transparent text-gray-0 placeholder-gray-200 outline-none',
          value ? '' : 'border-r border-gray-200',
        )}
      />
      {value ? (
        <button onClick={() => setValue('')}>
          <LiaTimesSolid size="1.5rem" />
        </button>
      ) : (
        <IoFileTraySharp size="1.5rem" />
      )}
    </Link>
  )
}

export default Search
