import { SkeletonCircle, SkeletonText } from '@/components/skeleton'

const ContentsSkeleton = () => {
  return (
    <div className="flex flex-col overflow-y-scroll scrollbar-hide">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="flex items-center gap-4 px-3 py-3" key={index}>
          <SkeletonCircle size="56px" />
          <div className="flex-1 pr-5">
            <SkeletonText lines={2} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContentsSkeleton
