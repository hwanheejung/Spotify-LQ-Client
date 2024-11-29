'use client'

import { Tooltip } from '@/components/tooltip'
import { useYourLibraryStore } from '@/lib/stores/your-library.store'
import { FiSearch } from 'react-icons/fi'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { IoLibrarySharp } from 'react-icons/io5'
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'
import CreateButton from './Header/CreateButton'

const OpenedContentsHeader = () => (
  <div className="mx-3 flex h-10 items-center justify-between border-b-[0.5px] border-gray-500 text-xxs font-bold">
    <span>Title</span>
    <span>Date Added</span>
  </div>
)

const ClosedContentsHeader = () => (
  <div className="mx-3 flex h-10 items-center justify-between border-b-[0.5px] border-gray-500 text-xs font-bold">
    <FiSearch size="1.2rem" />
    <div className="flex items-center gap-1">
      <span>Recents</span>
      <MdOutlineFormatListBulleted size="1.2rem" />
    </div>
  </div>
)

const Header = () => {
  const { isOpen, setIsOpen } = useYourLibraryStore()

  return (
    <div className={twMerge('text-gray-200', isOpen ? 'w-[500px]' : '')}>
      <div className="flex items-center justify-between px-3 py-4">
        <button className="flex gap-2 hover:text-gray-0">
          <IoLibrarySharp size="1.4rem" style={{ paddingBottom: 2 }} />
          <span className="text-md font-bold">Your Library</span>
        </button>
        <div className="mr-3 flex items-center gap-3">
          <CreateButton />
          <button>
            {isOpen ? (
              <Tooltip label="Show More" placement="top">
                <GoArrowLeft size="1.5rem" onClick={() => setIsOpen(false)} />
              </Tooltip>
            ) : (
              <Tooltip label="Show More" placement="top">
                <GoArrowRight size="1.5rem" onClick={() => setIsOpen(true)} />
              </Tooltip>
            )}
          </button>
        </div>
      </div>
      {isOpen ? <OpenedContentsHeader /> : <ClosedContentsHeader />}
    </div>
  )
}

export default Header
