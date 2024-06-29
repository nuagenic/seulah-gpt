import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ChatOutput from './Components/ChatOutput'
import ChatInput from './Components/ChatInput'

const chats: { by: 'SEULA' | 'YOU'; message: string }[] = [
  {
    by: 'SEULA',
    message: '야 이진수',
  },
  { by: 'SEULA', message: '너 장난해?\n니가 감히 날 기계로 만들어?' },
  { by: 'SEULA', message: '너 돈 날린거야 밥팅아\n난 그렇게 단순하지 않다고' },
]

const App: React.FC = () => {
  const [displayedChats, setDisplayedChats] = useState<
    { by: 'SEULA' | 'YOU'; message: string }[]
  >([])
  const [chatIndex, setChatIndex] = useState(0)
  const [inputMessage, setInputMessage] = useState<string | null>(null)
  const [isInputHandled, setIsInputHandled] = useState(false)

  const handleSend = (message: string) => {
    setDisplayedChats(prevChats => [...prevChats, { by: 'YOU', message }])
    setInputMessage(message)
    setIsInputHandled(true)
  }

  useEffect(() => {
    if (isInputHandled && chatIndex < chats.length) {
      const interval = setInterval(() => {
        setDisplayedChats(prevChats => [...prevChats, chats[chatIndex]])
        setChatIndex(prevIndex => prevIndex + 1)
      }, 2500)

      return () => clearInterval(interval)
    }
  }, [isInputHandled, chatIndex])

  return (
    <>
      <Header />
      {displayedChats.map((chat, index) => (
        <ChatOutput key={index} by={chat.by} message={chat.message} />
      ))}
      <ChatInput onSend={handleSend} />
    </>
  )
}

export default App
