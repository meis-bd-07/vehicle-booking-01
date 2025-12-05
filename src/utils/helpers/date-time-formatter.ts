const dateFormat = (date: string | Date): string => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(newDate);
}

export {dateFormat}