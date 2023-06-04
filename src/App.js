import data from './data.json'
import './App.css'
import Listing from './components/Listing'

function App() {

  return (
      <Listing data={data} />
  )
}

export default App
