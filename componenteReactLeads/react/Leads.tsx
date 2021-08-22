import React, { useState } from 'react'
//import { useCssHandles } from 'vtex.css-handles'
//import { useQuery } from 'react-apollo'
import axios from 'axios'


interface LeadsProps {
 
}
const Leads: StorefrontFunctionComponent<LeadsProps> = ({}) => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  
  function handlePesquisa() {
    axios.get('https://0p3z4qvry6.execute-api.us-east-2.amazonaws.com/items').then(function(response:any){console.log(response)})
    axios.put('https://0p3z4qvry6.execute-api.us-east-2.amazonaws.com/items', 
      {
      id: `${telefone}`,
      email:`${email}`,
      name:`${nome}`
    }
  )
    .then(function (response:any) {
      console.log(response);
    })
    .catch(function (error:any) {
      console.log(error);
    });
    setNome('');
    setTelefone('');
    setEmail('');
    }
   
  return (
    <>
      <p><input type="text" className="nomeInput" placeholder="nome" value={nome} onChange={e => setNome((e.target as any).value)} /></p>
      <p><input type="tel" className="telefoneInput" placeholder="telefone" value={telefone} onChange={e => setTelefone((e.target as any).value)} /></p>
      <p><input type="email" className="emailInput" placeholder="email" value={email} onChange={e => setEmail((e.target as any).value)} /></p>
      <button type="button" onClick={handlePesquisa} >Cadastrar</button>
    </>
  )

  }
export default Leads
