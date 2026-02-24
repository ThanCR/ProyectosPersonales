import { useEffect, useState } from "react"


export const useCountDown = (deadline: string) => {

    const calculate = () => {
        const diff = new Date(deadline).getTime() - Date.now()
        return diff > 0 ? Math.floor(diff / 1000) : 0
    }

    const [remaining, setRemaining] = useState(calculate())

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(calculate())
        }, 1000)

        return () => clearInterval(interval)
    }, [deadline])

    return remaining
}

