import Header from './components/Header'
import Nav from './components/Nav'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const App = () => {
  return (
    <>
      <Header />
      <Nav />
    </>
  )
}

export default App
