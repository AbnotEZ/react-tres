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
