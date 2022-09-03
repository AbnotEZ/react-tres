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
