import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 40, startDelay = 900, className = '' }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className={`inline-block w-[2px] translate-y-[0.1em] bg-current align-middle ${done ? 'animate-pulse' : 'opacity-100'}`}>
        &nbsp;
      </span>
    </span>
  )
}
