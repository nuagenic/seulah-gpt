import { useState, useEffect } from 'react'

type Writer = 'SEULA' | 'YOU'

type ChatOutputProps = {
  by: Writer
  message: string
}

const ChatOutput = (props: ChatOutputProps) => {
  const messagePieces: string[] = props.message.split('')
  const [joinedMessage, setJoinedMessage] = useState('')
  const [pieceIndex, setPieceIndex] = useState(0)
  const [renderedMessage, setRenderedMessage] = useState<string[]>([])

  const freq = 90 + Math.random() * 50

  useEffect(() => {
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
          console.log('clear')
          return prevPieceIndex
        }
      })
    }, freq) // 1초마다 실행
    return () => clearInterval(interval) // 컴포넌트 언마운트 시 인터벌 정리
  }, [messagePieces, freq])

  const renderByLine = (message: string) => {
    return message
      .split('\n')
      .map((line, index) => <div key={index}>{line}</div>)
  }

  return (
    <div className="flex flex-row gap-8">
      <div>{props.by}</div>
      <div>{renderByLine(joinedMessage)}</div>
    </div>
  )
}

export default ChatOutput
