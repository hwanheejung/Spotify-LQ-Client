import Skeleton from './skeleton'

interface SkeletonCircleProps {
  size?: string
}

const SkeletonCircle = ({ size = '50px' }: SkeletonCircleProps) => {
  return (
    <Skeleton
      className="rounded-full"
      style={{
        width: size,
        aspectRatio: '1 / 1',
      }}
    />
  )
}

export default SkeletonCircle
