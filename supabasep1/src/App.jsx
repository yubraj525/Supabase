
import { useState,useEffect } from "react"

const App = () => {
 const [time, setTime] = useState(0)

 useEffect(() => {
  const interval = setInterval(() => {
    const date = new Date()
   setTime( date.toDateString() )
  }, 1000)

  return () => clearInterval(interval)
 }, [])



  return (
<p className="text-3xl font-bold underline">{time}</p>
  )
}

export default App