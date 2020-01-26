import React, { useCallback, useState } from 'react'
import { useThrottle, useDebounds } from 'use-delay'

const App = () => {
  const [throttleCount, setThrottleCount] = useState(0);
  const [deboundsCount, setDeboundsCount] = useState(0);
  const actionThrottleHandle = useCallback(() => {
    setThrottleCount(throttleCount + 1)
  })

  const actionDeboundsHandle = useCallback(() => {
    setDeboundsCount(deboundsCount + 1)
  })

  const onTrottle = useThrottle(1000, actionThrottleHandle)
  const onDebounds = useDebounds(1000, actionDeboundsHandle)

  return (
    <div className={"outerDiv"}>
      <div className={"throttleDiv"} onScroll={onTrottle}>
        <div className={"fixcount"}>
          {`throttle count ${throttleCount}`}
        </div>
        <div className={"innerDiv"}>
          throttle
        </div>
      </div>

      <div className={"deboundsDiv"} onScroll={onDebounds}>
        <div className={"fixcount"}>
          {`debounds count ${deboundsCount}`}
        </div>
        <div className={"innerDiv"}>
          debounds
        </div>
      </div>
    </div>
  )
}
export default App
