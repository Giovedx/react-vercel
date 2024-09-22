import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

 

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.correo === updatedUser.correo ? updatedUser : user)));
    setCurrentUser(null);
  };

  const deleteUser = (correo) => {
    setUsers(users.filter((user) => user.correo !== correo));
  };

  const editUser = (user) => {
    setCurrentUser(user);
    
  };

  return (
    <div className="container">
      <br />
      <div
        className="mx-auto border border-primary border-2"
        style={{ width: '490px' }}
      >
        <div className="mx-3" style={{ width: '590px' }}>
          <h1>Formulario de Usuarios</h1>
          <br />
        </div>

        <Form
          addUser={addUser}
          updateUser={updateUser}
          currentUser={currentUser}
          
        />
      </div>

      <br />
      <div
        className="mx-left border border-primary border-2"
        style={{ width: '450px' }}
      >
        <h1 className="mx-5"> Lista de Usuarios:</h1>
        <h3>____________________________________</h3>

        <List users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
    </div>
  );
};

export default App;
