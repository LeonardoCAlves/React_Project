import '../styles/components/redessociais.sass'
import {FaLinkedinIn, FaGithub, FaInstagram, FaYoutube} from 'react-icons/fa'

const sociais = [
    { 
      nome: 'linkedin', 
      icon: <FaLinkedinIn />, 
      c: 'https://www.linkedin.com/in/leonardoalvesprog/' },
    { 
      nome: 'github', 
      icon: <FaGithub />, 
      c: 'https://github.com/Leon4rdoalves'},
    { 
      nome: 'instagram', 
      icon: <FaInstagram />,
      c: 'https://www.instagram.com/ebony__alves/' },
    { 
      nome: 'youtubeprog', 
      icon: <FaYoutube />,
      c: 'https://www.youtube.com/channel/UC8fRZfYGd21_D8DwuEcFuHw' },
    { 
      nome: 'youtubeartes', 
      icon: <FaYoutube />,
      c: 'https://www.youtube.com/channel/UCgMsaDIka3GpY3GSKSnUNZg'},
]


const RedesSociais = () => {
  return (
    <section id='redes-sociais'>
        {sociais.map((s) => (
            <a href={s.c} className='social-btn' id={s.nome} key={s.nome} target='_blank'>
                {s.icon}
            </a>
        ))}
    </section>
  )
}

export default RedesSociais