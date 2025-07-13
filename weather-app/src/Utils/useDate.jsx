import { useEffect, useState } from "react"


export const useDate = () =>{
    const local = 'en'
    const [today, setData] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Data())
        }, 60*1000)
            
        return () =>{
            clearInterval(timer)
        }
    },[])

    const day = today.toLocaleDateString(locale, {weekday: 'long'})

    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`

    const time = today.toLocalDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })

    return{
        date, time
    }
}

