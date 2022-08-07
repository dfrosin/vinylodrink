function fetchDrink() {}

async function fetchAlbum() {
  const songId: string = '442856'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2ca401f6b1mshecea2fb82b3330cp1a99fdjsn0724a0d65c97',
      'X-RapidAPI-Host': 'genius.p.rapidapi.com'
    }
  }
  const response: Response = await fetch(
    `https://genius.p.rapidapi.com/songs/${songId}`,
    options
  )
  const data: any | null = response.json
  return data
}
export { fetchDrink, fetchAlbum }
