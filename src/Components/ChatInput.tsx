import { useState } from 'react'

type ChatInputProps = {
  onSend: (message: string) => void
}

const ChatInput = (props: ChatInputProps) => {
  const [message, setMessage] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const handleSend = () => {
    if (message.trim() != '') {
      props.onSend(message)
      setMessage('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing === false && event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="flex flex-row gap-8">
      <div>Chat:</div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default ChatInput
