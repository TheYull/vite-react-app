import './App.css'
import Advice from './components/Advice/Advice'
import Favorite from './components/Favorite/Favorite'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Subheader from './components/Subheader/Subheader'

function App() {

  return (
    <>
      <Header />
      <Subheader />
      <Favorite />
      <Advice />
      <Footer />
    </>
  )
}

export default App
