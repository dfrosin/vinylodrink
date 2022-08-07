function fetchDrink() {}

async function fetchAlbum() {
  const artistId: string = '111279'

  const response: Response = await fetch(
    `http://theaudiodb.com/api/v1/json/2/album.php?i=${artistId}`
  )
  const data: any | null = await response.json()
  return data.album[0].strAlbum
}
export { fetchDrink, fetchAlbum }
