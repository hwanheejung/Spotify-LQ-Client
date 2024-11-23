import {
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@/components/temp-menu'
import { Tooltip } from '@/components/temp-tooltip'
import { FaRegFolder } from 'react-icons/fa6'
import { GoPlus } from 'react-icons/go'
import { TbMusicPlus } from 'react-icons/tb'

const CreateButton = () => {
  return (
    <Menu placement="bottom-end">
      <Tooltip label="Create playlist or folder" className="flex">
        <MenuButton as="button" className="my-auto">
          <GoPlus size="1.6rem" />
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuItem iconLeft={<TbMusicPlus />}>Create a new playlist</MenuItem>
        <Divider />
        <MenuItem iconLeft={<FaRegFolder />}>Create a playlist folder</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default CreateButton
