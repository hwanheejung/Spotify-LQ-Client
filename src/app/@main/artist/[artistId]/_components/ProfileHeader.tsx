import commaizeNumber from '@/lib/utils/commaizeNumber'
import { ArtistDTO } from '@/types/artists'

const ProfileHeader = ({
  name,
  images,
  followers,
}: Pick<ArtistDTO, 'name' | 'images' | 'followers'>) => {
  return (
    <div
      className="relative flex h-80 w-full flex-col justify-end bg-cover bg-center p-5"
      style={{
        backgroundImage: `url(${images[0].url})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-gray-900/90" />
      <div className="z-10 text-5xl font-extrabold">{name}</div>
      <div className="z-10">{commaizeNumber(followers.total)} followers</div>
    </div>
  )
}

export default ProfileHeader
