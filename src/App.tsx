import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ChatOutput from './Components/ChatOutput'
import ChatInput from './Components/ChatInput'
import Line from './Components/Line'

const chats: { id?: number; by: 'seula' | 'you'; message: string }[] = [
  {
    id: 1,
    by: 'seula',
    message: '야 이진수',
  },
  { id: 2, by: 'seula', message: '너 장난해?\n니가 감히 날 기계로 만들어?' },
  {
    id: 3,
    by: 'seula',
    message: '너 돈 날린거야 밥팅아\n난 그렇게 단순하지 않다고',
  },
]

const App: React.FC = () => {
  const [displayedChats, setDisplayedChats] = useState<
    { by: 'seula' | 'you'; message: string }[]
  >([])
  const [chatIndex, setChatIndex] = useState(0)
  const [inputMessage, setInputMessage] = useState<string | null>(null)
  const [isInputHandled, setIsInputHandled] = useState(false)
  const [onFinish0, setOnFinish0] = useState(true)
  const [onFinish1, setOnFinish1] = useState(false)
  const [onFinish2, setOnFinish2] = useState(false)
  const [onFinish3, setOnFinish3] = useState(false)
  const flags: boolean[] = [onFinish0, onFinish1, onFinish2, onFinish3]
  const setFlags: React.Dispatch<React.SetStateAction<boolean>>[] = [
    setOnFinish0,
    setOnFinish1,
    setOnFinish2,
    setOnFinish3,
  ]

  const handleSend = (message: string) => {
    setDisplayedChats(prevChats => [...prevChats, { by: 'you', message }])
    setInputMessage(message)
    setIsInputHandled(true)
  }

  useEffect(() => {
    if (isInputHandled && flags[chatIndex] && chatIndex < chats.length) {
      const timeout = setTimeout(() => {
        setDisplayedChats(prevChats => [...prevChats, chats[chatIndex]])
        setChatIndex(prevIndex => prevIndex + 1)
      }, 1500)
      return () => clearTimeout(timeout)
    }
  }, [isInputHandled, flags, chatIndex])

  return (
    <div className="bg-background h-screen text-white p-24 flex flex-col justify-between">
      <Header />
      <div className="flex flex-col text-2xl gap-8">
        <div className="flex flex-col gap-6">
          {displayedChats.map((chat, index) => (
            <ChatOutput
              key={index}
              by={chat.by}
              message={chat.message}
              onFinish={() => setFlags[index](true)}
            />
          ))}
        </div>
        <Line />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  )
}

export default App
