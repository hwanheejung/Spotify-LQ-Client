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
        height: size,
      }}
    />
  )
}

export default SkeletonCircle
