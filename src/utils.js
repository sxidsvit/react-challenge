export const formatedData = ((locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(Date.now())
})

export const generateId = () => {
  const rez = Date.now().toString().slice(9, 13)
  return parseInt(rez, 10)
}

export const getLoacalStorage = () => {

  const data = JSON.parse(localStorage.getItem('twitts')) ? JSON.parse(localStorage.getItem('twitts')) : []

  return data
}