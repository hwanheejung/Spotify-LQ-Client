'use client'

import Tooltip from '@/components/Tooltip'

const CreatePlaylist = () => {
  return (
    <div>
      <h2>Create your first playlist</h2>
      <p>It&apos;s easy, we&apos;ll help you</p>
      <div className="flex flex-col">
        <Tooltip label="Create" isDisabled={false}>
          <button className="bg-gray-0 text-gray-900">Create Playlist</button>
        </Tooltip>
      </div>
    </div>
  )
}

export default CreatePlaylist
