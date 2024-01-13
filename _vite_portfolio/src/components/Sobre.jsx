import '../styles/components/sobre.sass'
import {BsEmojiLaughing, BsFillSuitHeartFill} from 'react-icons/bs'

const sobre = () => {
  return (
    <section>
        <h2>Sobre</h2>
        <p>
          Apaixonado por programação, iniciei meus estudos em 2013 
          com lógica de programação e em seguida, Python que sim, 
          é minha linguagem do {<BsFillSuitHeartFill />}, é tá bom, 
          eu sei eu sei... {<BsEmojiLaughing />} Daí em diante não 
          parei mais de estudar e naturalmente conhecer outras linguagens
           e hoje, atuo como Instrutor e desenvolvedor, o que me permitiu 
          até aqui, viver momentos incríveis acompanhando o progresso de 
          +600 alunos, do 'Olá, Mundo!' à construção de projetos incríveis.
          <br/>
          Me considero ágil, consistente em aprender e aprimorar-me em novas 
          tecnologias, alta adaptabilidade às mudanças e sempre pronto para superar 
          novos desafios!
        </p>
    </section>
  )
}

export default sobre