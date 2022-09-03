import { useState } from "react";



export default function UserList({data}) {
  
  const [userName, setColaborador] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const handdler = (e) => {
    e.preventDefault();
    const id = Number(userName[userName.length - 1].id) + 1;
    let userAdded = {
      "id": id.toString(),
      "nombre": name,
      "correo": email
    }
    setColaborador([...userName, userAdded]);
    setName("");
    setEmail("");
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const list = !search 
    ? userName 
    : userName.filter((x) => x.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );

  return (
    <>
    <header className="bg-gray-50">
      <div className="flex items-center px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        
        <div className="relative">
          <input
            className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Buscardor 🔍	"
            value={search}
            onChange={(e) => searchHandler(e)}
          />
        </div>
      </div>
    </header>

    <form onSubmit={handdler}>
      <label className="relative block p-3 border-2 border-gray-200 rounded-lg">
        <input className="w-full p-0 text-sm border-none focus:ring-0" 
          id="nombre" 
          type="text" 
          placeholder="Ingresa nombre"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
        <br />
      <label className="relative block p-3 border-2 border-gray-200 rounded-lg" >
        <input className="w-full p-0 text-sm border-none focus:ring-0" 
          id="correo" 
          type="email" 
          placeholder="Ingresa Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label> <br />
      <button>Agregar</button>
    </form>

    <ul>
      {list.map((userColaborador) => (
        <li key={userColaborador.id}>{userColaborador.nombre} {userColaborador.correo}
        </li>
      ))}
    </ul>
    </>
  )
}