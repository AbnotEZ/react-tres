import { useState } from "react";
import UserList from "./UserList";

function UserFilter({userSearch,setUserSearch,userList, setUserList, userName, setUserName, userEmail, setUserEmail, userDataContainer,setUserDataContainer}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const arregloFiltrado = userList.filter( x => x.nombre.toLowerCase().includes(userSearch) || x.correo.toLowerCase().includes(userSearch) || x.id.toLowerCase().includes(userSearch));
        const result = arregloFiltrado.length() !== 0 
        ? setUserDataContainer(arregloFiltrado)
        : setUserDataContainer(userList);
        
        
        /* const result = !userSearch ? userList: userList.filter(x => x.nombre.toLowerCase().includes(userSearch.toLowerCase()) ); */
      }

  return (
    <form onSubmit={handleSubmit}>
      <input value={userSearch} placeholder="Buscador" 
      onChange={(e) => setUserSearch(e.target.value)}/>
      <button>Enter</button>
    </form>
  );
};

export default UserFilter;
