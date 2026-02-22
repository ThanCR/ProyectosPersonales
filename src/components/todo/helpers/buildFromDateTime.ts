

export const buildFromDateTime = (date: Date, time: string) => {
        const [ hours, minutes, seconds = "0"] = time.split(":")
        const dateTime = new Date(date)
        dateTime.setHours(Number(hours))
        dateTime.setMinutes(Number(minutes))
        dateTime.setSeconds(Number(seconds))
    return dateTime
}

