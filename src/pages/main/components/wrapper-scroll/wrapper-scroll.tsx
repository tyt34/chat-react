import React, {
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import './wrapper-scroll.scss'

interface Props {
  type: 'messages' | 'users'
  children: ReactElement
}

export const WrapperScroll: FC<Props> = ({ children, type }) => {
  const divRef = useRef<null | HTMLDivElement>(null)
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null)
  const [showScrollbar, setShowScrollbar] = useState(false)

  const overflowY = showScrollbar ? 'scroll' : 'hidden'
  const classDiv = `scrollbar scrollbar__${type}`

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setShowScrollbar(true)
      event.preventDefault()

      if (timer) {
        clearTimeout(timer)
      }

      const newTimer = setTimeout(() => {
        setShowScrollbar(false)
      }, 2000)

      setTimer(newTimer)

      if (divRef.current !== null) {
        divRef.current.scrollBy(0, event.deltaY)
        setShowScrollbar(true)
      }
    }

    if (divRef.current !== null) {
      divRef.current.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (divRef.current !== null) {
        divRef.current.removeEventListener('wheel', handleWheel)
      }
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timer, showScrollbar])

  return (
    <div
      ref={divRef}
      className={classDiv}
      style={{
        overflowY: overflowY
      }}
    >
      {children}
    </div>
  )
}
