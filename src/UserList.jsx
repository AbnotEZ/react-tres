function UserList({user, userDataContainer}) {
  console.log(userDataContainer)
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
