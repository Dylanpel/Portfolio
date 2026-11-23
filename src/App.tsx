import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import MentionsLegales from './pages/MentionsLegales'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mention-legales' element={<MentionsLegales />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
