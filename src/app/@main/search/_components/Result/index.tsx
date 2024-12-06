import Albums from './Albums'
import Artists from './Artists'
import Songs from './Songs'
import TopResult from './TopResult'

const Result = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <TopResult />
        <Songs />
      </div>
      <Artists />
      <Albums />
    </div>
  )
}

export default Result
