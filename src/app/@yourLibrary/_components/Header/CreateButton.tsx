import { Menu, MenuButton, MenuItem, MenuList } from '@/components/Menu'
import { Tooltip } from '@/components/Tooltip'
import { FaRegFolder } from 'react-icons/fa6'
import { GoPlus } from 'react-icons/go'
import { TbMusicPlus } from 'react-icons/tb'

const CreateButton = () => {
  return (
    <Menu>
      <Tooltip label="Create playlist or folder">
        <MenuButton as="button">
          <GoPlus size="1.6rem" />
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuItem iconLeft={<TbMusicPlus />}>Create a new playlist</MenuItem>
        <MenuItem iconLeft={<FaRegFolder />}>Create a playlist folder</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default CreateButton
