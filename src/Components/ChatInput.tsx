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
    <div className="flex flex-row items-start gap-11 h-28 justify-between">
      <div className="leading-10 w-20 font-seula">Chat:</div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={handleKeyDown}
        className="block bg-transparent border-none focus:outline-none text-white w-full caret-white leading-10 text-xl font-chat"
      />
    </div>
  )
}

export default ChatInput
