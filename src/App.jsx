import { useFetch } from './UseFetch'
import './App.css'

import './App.css'

function App() {
  const { data, loading } = useFetch("https://hp-api.onrender.com/api/characters")

  return (
    <>
      <div className='App'>
       <h1>Aspirante de Hogwarts</h1>
       <div className='card'></div>
       <ul>
<table className="table-primary">
{loading && <li>Loading...</li>}

  <thead>
    <tr>
      <th scope="col">Foto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Especie</th>
      <th scope="col">Casa</th>
      <th scope="col">Patronus</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  {data?.map((character) => (<li key={character.id}>
    <tr> 
       <img src={character.image}/>
          <th>{character.name}</th>
          <th>{character.species}</th>
          <th>{character.house}</th>
          <th>{character.patronus}</th>
    </tr>
   </li>))}
  </tbody>
</table>
       
       
       
        
       </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
