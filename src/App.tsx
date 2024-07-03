import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ChatOutput from './Components/ChatOutput'
import ChatInput from './Components/ChatInput'
import Line from './Components/Line'


const chats: { by: 'seula' | 'you'; message: string }[] = [
  {
    by: 'seula',
    message: '야 이진수',
  },
  { by: 'seula', message: '너 장난해?\n니가 감히 날 기계로 만들어?' },
  { by: 'seula', message: '너 돈 날린거야 밥팅아\n난 그렇게 단순하지 않다고' },
]

const App: React.FC = () => {
  const [displayedChats, setDisplayedChats] = useState<
    { by: 'seula' | 'you'; message: string }[]
  >([])
  const [chatIndex, setChatIndex] = useState(0)
  const [inputMessage, setInputMessage] = useState<string | null>(null)
  const [isInputHandled, setIsInputHandled] = useState(false)

  const handleSend = (message: string) => {
    setDisplayedChats(prevChats => [...prevChats, { by: 'you', message }])
    setInputMessage(message)
    setIsInputHandled(true)
  }

  useEffect(() => {
    if (isInputHandled && chatIndex < chats.length) {
      const interval = setInterval(() => {
        setChatIndex(prevIndex => prevIndex + 1)
        setDisplayedChats(prevChats => [...prevChats, chats[chatIndex]])
      }, 2500)

      return () => clearInterval(interval)
    }
  }, [isInputHandled, chatIndex])

  return (
    <div className="bg-background h-screen text-white p-24 flex flex-col justify-between">
      <Header />
      <div className="flex flex-col text-2xl gap-8">
        <div>
          {displayedChats.map((chat, index) => (
            <ChatOutput key={index} by={chat.by} message={chat.message} />
          ))}
        </div>
        <Line />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  )
}

export default App
