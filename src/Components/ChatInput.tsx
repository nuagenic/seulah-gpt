import { useState } from 'react'

type ChatInputProps = {
  onSend: (message: string) => void
}

const ChatInput = (props: ChatInputProps) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    props.onSend(message)
    setMessage('')
  }

  return (
    <div className="flex flex-row gap-8">
      <div>Chat:</div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default ChatInput
