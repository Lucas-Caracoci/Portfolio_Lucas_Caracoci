import './App.css'
import BgParticulas from './components/Particulas/Bg-Particulas'
import Banner from './components/banner/banner'
import Projetos from './components/projetos/projetos'
import Skills from './components/skills/skills'
import Sobre from './components/sobre/sobre'
import Topo from './components/topo/topo'


function App() {
  

  return (
    <main>
      <BgParticulas id="particulas" />
      <Topo id="topo" />
      <Banner/>
      <Sobre/>
      <Skills/>
      <Projetos/>
    </main>
  )
}

export default App
