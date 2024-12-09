'use client'

import { Tooltip } from '@/components/tooltip'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { FiSearch } from 'react-icons/fi'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { IoLibrarySharp } from 'react-icons/io5'
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import CreateButton from './CreateButton'
import FilterType from './FilterType'

const ExpandedHeader = () => (
  <div className="mx-3 flex h-10 items-center justify-between border-b-[0.5px] border-gray-500 text-xxs font-bold">
    <span>Title</span>
    <span>Date Added</span>
  </div>
)

const DefaultHeader = () => (
  <div className="mx-3 flex h-10 items-center justify-between border-b-[0.5px] border-gray-500 text-xs font-bold">
    <FiSearch size="1.2rem" />
    <div className="flex items-center gap-1">
      <span>Recents</span>
      <MdOutlineFormatListBulleted size="1.2rem" />
    </div>
  </div>
)

const Header = () => {
  const { leftPanelState, setLeftPanelState, leftPanelRef } = useLayoutStore()

  if (leftPanelState === 'COLLAPSED')
    return (
      <div className="flex items-center justify-center px-3 py-4">
        <button
          className="flex gap-2 text-gray-200 hover:text-gray-0"
          onClick={() => leftPanelRef?.current?.expand()}
          aria-label="Expand"
        >
          <IoLibrarySharp size="1.6rem" style={{ paddingBottom: 2 }} />
        </button>
      </div>
    )

  return (
    <div className="text-gray-200">
      <div className="flex items-center justify-between px-3 py-4">
        <button
          className="flex gap-2 hover:text-gray-0"
          onClick={() => leftPanelRef?.current?.collapse()}
          aria-label="Collapse"
        >
          <IoLibrarySharp size="1.6rem" style={{ paddingBottom: 2 }} />
          <span className="text-md font-bold">Your Library</span>
        </button>
        <div className="mr-3 flex items-center gap-3">
          <CreateButton />
          <button aria-label="Toggle left panel">
            {leftPanelState === 'EXPANDED' ? (
              <Tooltip label="Show Less" placement="top">
                <GoArrowLeft
                  size="1.5rem"
                  onClick={() => setLeftPanelState('DEFAULT')}
                />
              </Tooltip>
            ) : (
              <Tooltip label="Show More" placement="top">
                <GoArrowRight
                  size="1.5rem"
                  onClick={() => setLeftPanelState('EXPANDED')}
                />
              </Tooltip>
            )}
          </button>
        </div>
      </div>

      <FilterType />
      {leftPanelState === 'DEFAULT' && <DefaultHeader />}
      {leftPanelState === 'EXPANDED' && <ExpandedHeader />}
    </div>
  )
}

export default Header
