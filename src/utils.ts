async function fetchDrink() {
  const response: Response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  )
  const data: any = await response.json()
  return data.drinks[0]
}

async function fetchAlbum() {
  const artistId: string = '111279'

  const response: Response = await fetch(
    `https://theaudiodb.com/api/v1/json/2/album.php?i=${artistId}`
  )
  const data: any | null = await response.json()
  return data.album[0].strAlbum
}
export { fetchDrink, fetchAlbum }
