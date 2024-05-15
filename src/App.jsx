import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import api from './services/api'

function App() {

  const [input, setinput] = useState('')
  const [cep, setcep] = useState('')

  async function search(){
    
    try{
      const response = await api.get(`${input}/json`)
      console.log(response.data)
      setcep(response.data)
      setinput('')
    }
    
    catch{
      alert('ERRO AO BUSCAR O CEP!')
      setinput('')
    }
    
    if(input === ''){
      alert('PREENCHA O CEP NO CAMPO ABAIXO!')
    }

  }

  return (
    <>
      <section className="wallpaper">
        <div className="container">
        <h1 className='title'>Buscador de CEP</h1>
        <div className="container-input">
        
          <input type="text"
          placeholder="CEP: (somente os números)"
          value = {input}
          onChange= {(e)=> setinput(e.target.value)}
          />
        <button className="button" onClick={search}>
          <FiSearch size={25} color='black'/>
          </button>
        </div>
        {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>RUA: {cep.logradouro}</span>
        <span>COMPLEMENTO: {cep.complemento}</span>
        <span>BAIRRO: {cep.bairro}</span>
        <span>CIDADE: {cep.localidade}-{cep.uf}</span>
        </main>
        )}
        </div>
      </section>
      
    </>
  )
}

export default App
