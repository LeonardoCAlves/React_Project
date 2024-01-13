import '../styles/components/maincontent.sass'

import Sobre from './Sobre'
import Tecnologias from './Tecnologias'
import Projetos from './Projetos'

const MainContent = () => {
  return ( <main id='main-content'>
    <Sobre />
    <Tecnologias />
    <Projetos />
  </main>
    
  )
}

export default MainContent