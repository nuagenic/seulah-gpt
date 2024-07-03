import { useState, useEffect } from 'react'
import classNames from 'classnames'

type Writer = 'seula' | 'you'

type ChatOutputProps = {
  by: Writer
  message: string
  onFinish?: () => void
}

const ChatOutput = (props: ChatOutputProps) => {
  const messagePieces: string[] = props.message.split('')
  const [joinedMessage, setJoinedMessage] = useState('')
  const [pieceIndex, setPieceIndex] = useState(0)
  const [renderedMessage, setRenderedMessage] = useState<string[]>([])

  const freq = 90 + Math.random() * 50

  useEffect(() => {
    if (props.by === 'seula') {
      const interval = setInterval(() => {
        setPieceIndex(prevPieceIndex => {
          if (prevPieceIndex < messagePieces.length) {
            const newPieceIndex = prevPieceIndex + 1
            setRenderedMessage(prevRenderedMessage => {
              const newRenderedMessage = [
                ...prevRenderedMessage,
                messagePieces[prevPieceIndex],
              ]
              setJoinedMessage(newRenderedMessage.join(''))
              return newRenderedMessage
            })
            return newPieceIndex
          } else {
            clearInterval(interval)
            props.onFinish && props.onFinish()
            return prevPieceIndex
          }
        })
      }, freq)
      return () => clearInterval(interval)
    } else {
      setJoinedMessage(props.message)
    }
  }, [props.by, messagePieces, freq])

  const renderByLine = (message: string) => {
    return message
      .split('\n')
      .map((line, index) => <div key={index}>{line}</div>)
  }

  const textColor = props.by === 'seula' ? 'text-mint' : 'text-white'

  const propsByClass = classNames(textColor, 'font-seula', 'w-20')

  return (
    <div className="flex flex-row gap-8 items-baseline leading-none">
      <div className={propsByClass} style={{ lineHeight: '3rem' }}>
        {props.by}
      </div>
      <div className="font-chat text-xl" style={{ lineHeight: '3rem' }}>
        {renderByLine(joinedMessage)}
      </div>
    </div>
  )
}

export default ChatOutput
