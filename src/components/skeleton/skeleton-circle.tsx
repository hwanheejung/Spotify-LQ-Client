import { twMerge } from 'tailwind-merge'
import Skeleton, { SkeletonProps } from './skeleton'

interface SkeletonCircleProps extends SkeletonProps {
  size?: string
}

const SkeletonCircle = ({
  size = '50px',
  className,
  ...props
}: SkeletonCircleProps) => (
  <Skeleton
    {...props}
    className={twMerge('rounded-full', className)}
    style={{
      width: size,
      height: size,
      ...props.style,
    }}
  />
)

export default SkeletonCircle
