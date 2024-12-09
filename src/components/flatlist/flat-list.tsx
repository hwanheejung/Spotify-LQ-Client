import { CSSProperties, ReactNode, forwardRef } from 'react'

export interface FlatListProps<T> {
  data: T[]
  renderItem: (item: T, index: number) => ReactNode
  keyExtractor: (item: T, index: number) => string | number
  className?: HTMLDivElement['className']
  style?: CSSProperties
}

const FlatList = forwardRef<HTMLDivElement, FlatListProps<any>>(
  ({ data, renderItem, keyExtractor, className, style }, ref) => {
    return (
      <div ref={ref} className={className} style={style}>
        {data.map((item, index) => (
          <div key={keyExtractor(item, index)}>{renderItem(item, index)}</div>
        ))}
      </div>
    )
  },
)

FlatList.displayName = 'FlatList'

export default FlatList
