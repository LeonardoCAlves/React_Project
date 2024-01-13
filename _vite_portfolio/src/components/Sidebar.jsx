import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import RedesSociais from './RedesSociais'
import Contato from './Contato'


const Sidebar = () => {
  return ( 
  <aside id="sidebar">
    <img src={Avatar} alt="Leonardo Alves" />
    <p className="titulo">Desenvolvedor Full Stack</p>
    <RedesSociais />
    <Contato />
    <a href="" className="btn">
      Baixar Currículo
    </a>
  </aside> 
    
  )
}

export default Sidebar