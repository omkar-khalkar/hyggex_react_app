import Navbar from "./components/Navbar"
import Path from "./components/Path"
import Dashboard from "./modules/Dashboard"
import FAQ from "./modules/FAQ"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Path/>
      <Dashboard/>
      <FAQ/>
    </div>
  )
}

export default App
