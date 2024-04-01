import Navbar from './Components/Navbar'
import NavStrip from './Components/NavStrip'
import Footer from './Components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Components/AppRoutes';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <NavStrip />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App