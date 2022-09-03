UserList
function UserList({user, userDataContainer}) {
    console.log()
    return (
      <div>
        <ul>  {userDataContainer.map((list) => (
          <li key={list.id}>
            {list.nombre} <br></br>
            {list.correo}
          </li>
        ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;

  
***********************************************************************
import { useState } from "react";

function UserForm({
  userList,
  setUserList,
  userName,
  setUserName,
  userEmail,
  setUserEmail,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const numId = userList[userList.length - 1].id + 1;
    const objeto = {
      id: numId,
      nombre: userName,
      correo: userEmail,
    };
    setUserList([...userList, objeto]);
    /* (userName !== null || userEmail !== null) ? setUserList([...userList, objeto]) : null; */

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userName}
        placeholder="Ingresa tu nombre"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        value={userEmail}
        placeholder="Ingresa tu mail"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button>Enter</button>
    </form>
  );
}

export default UserForm;
************************************************************************
import "./App.css";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserFilter from "./UserFilter";
import { useState } from "react";
import { BaseColaboradores } from "./data/db.js";

function App() {
  const [userList, setUserList] = useState(BaseColaboradores);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSearch, setUserSearch] = useState(""); 
  const [userDataContainer, setUserDataContainer] = useState(""); 
  return (
    <>
     <UserFilter userSearch={userSearch} setUserSearch={setUserSearch} userList={userList} setUserList={setUserList} userName={userName} setUserName={setUserName} userEmail={userEmail} setUserEmail={setUserEmail} userDataContainer={userDataContainer} setUserDataContainer={setUserDataContainer} /> 
      <UserForm userList={userList} setUserList={setUserList} userName={userName} setUserName={setUserName} userEmail={userEmail} setUserEmail={setUserEmail} />
      <UserList user={userList} setUserList={setUserList} userDataContainer={userDataContainer} />
    </>
  );
}

export default App;
*****************************************************************************
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
