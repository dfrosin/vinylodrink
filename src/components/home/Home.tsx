import './home.css'
import { fetchAlbum, fetchDrink } from '../../utils'

function Home() {
  console.log(fetchDrink())
  console.log(fetchAlbum())
  return (
    <div className="Home">
      <main>
        <h1>Vinyl & Drink</h1>
        <img src="/src/assets/vinylLogo.svg" alt="vinyldrink logo" />
      </main>
    </div>
  )
}

export default Home
