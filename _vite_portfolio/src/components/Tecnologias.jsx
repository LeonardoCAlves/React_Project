import {
  DiHtml5, DiCss3, DiJsBadge,
  DiNodejsSmall, DiMysql, DiReact,
  DiAngularSimple, DiPython, DiJava, DiSass
} from 'react-icons/di'

import '../styles/components/tecnologias.sass'

const tec = [
  {id: 'js', nome: 'JavaScript', icon: <DiJsBadge />},
  {id: 'mysql', nome: 'MySQL', icon: <DiMysql />},
  {id: 'java', nome: 'Java', icon: <DiJava />},
  {id: 'py', nome: 'Python', icon: <DiPython />},
  {id: 'html', nome: 'HTML5', icon: <DiHtml5 />},
  {id: 'css', nome: 'CSS3', icon: <DiCss3 />},
  {id: 'sass', nome: 'Sass', icon: <DiSass />},
  {id: 'node', nome: 'Node.js', icon: <DiNodejsSmall />},
  {id: 'react', nome: 'React', icon: <DiReact />},
  {id: 'angular', nome: 'Angular', icon: <DiAngularSimple />}  
]

const tecnologias = () => {
  return (
    <section className='tecnologias'>
      <h2>Tecnologias</h2>
      <div className="tec-grid">
        {tec.map((t) => (
          <div className="tec-card" id={t.id} key={t.id}>
            {t.icon}
            <div className="tec-info">
              <h3>{t.nome}</h3>
              <div className="progress-bar"></div>
              <p>
                Inciante&nbsp;&nbsp;&nbsp;&nbsp;
                Intermediário&nbsp;&nbsp;&nbsp;&nbsp;
                Avançado</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default tecnologias