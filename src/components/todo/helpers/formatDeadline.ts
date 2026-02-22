
export const formatDateToShow = (iso: string) => {
    const date = new Date(iso)
    return new Intl.DateTimeFormat("es-CR", {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(date)
}


