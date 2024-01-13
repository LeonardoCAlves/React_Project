import '../styles/components/contato.sass'
import {AiOutlineMail, AiFillEnvironment, AiOutlineWhatsApp} from 'react-icons/Ai'


const Contato = () => {
  return (
    <section id='contato'>
        <div className="card">
            <AiOutlineWhatsApp id='celular' />
            <>
               <h3>Celular:</h3>
               <p>(11) 979714423</p>
            </>
        </div>

        <div className="card">
            <AiOutlineMail id='email' />
            <>
               <h3>Email:</h3>
               <p>leon4rdoalvess@gmail.com</p>
            </>
        </div>

        <div className="card">
            <AiFillEnvironment id='pin' />
            <>
               <h3>Localização:</h3>
               <p>São Paulo • SP</p>
            </>
        </div>

    
    </section>



  )
}

export default Contato