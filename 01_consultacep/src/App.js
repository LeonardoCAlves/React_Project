import {FiSearch} from 'react-icons/fi'
import {useState} from 'react'
import api from './services/api'
import $ from 'jquery'

function App() {
 
  const [input, setInput] = useState('')
  input.replace(/[^0-9]/g,'')

  const [cepresponse, setcep] = useState({})

  async function buscar() {

    if (input === '') {
      alert('Ops, nenhum CEP foi inserido...')
      $('.saida').css({
        'display': 'none'
      })
      return
    }
    
    try{
      const response = await api.get(`${input}/json`)
      // console.log(response.data)
      setcep(response.data)
      setInput('')
    }
    catch {
      $('.saida').text('Ops, não consegui encontrar!')
    }
  }
  return (
    <div className='container'>
      <h1 className="titulo">Buscador de CEP</h1>
      <div className='entrada'>
        <input 
        type='text' 
        id="inputcep" 
        placeholder="Digite um cep"
        value={input}
        
        onChange={
          (e) => setInput(e.target.value)
        }
        />
      
        <button id='btnprocurar' onClick={buscar}>
          <FiSearch size={20} color='#f4f4f4'/>
        </button>
      </div>

      {Object.keys(cepresponse).length > 0 && (
        <main className='saida'>
          <h2>CEP: {cepresponse.cep}</h2>
          <span>Rua: {cepresponse.logradouro}</span>
          <span>Bairro: {cepresponse.bairro}</span>
          <span>Cidade: {cepresponse.localidade}</span>
          <span>Estado: {cepresponse.uf}</span>
          <span>DDD: {cepresponse.ddd}</span>
        </main>
      )} 
    </div>
  );
}

export default App;
