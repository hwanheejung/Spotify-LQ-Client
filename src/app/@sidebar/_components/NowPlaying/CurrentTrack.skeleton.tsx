import { Skeleton, SkeletonText } from '@/components/skeleton'

const CurrentTrackSkeleton = () => (
  <div className="px-3">
    <Skeleton className="mb-3 h-60 w-60" />
    <SkeletonText width="5rem" lineHeight="1.5rem" className="mb-3" />
    <SkeletonText width="8rem" lineHeight="1rem" />
  </div>
)

export default CurrentTrackSkeleton
