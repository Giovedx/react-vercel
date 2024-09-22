import React from "react";
import Items from "./Items";


const List = ( {users, deleteUser, editUser}) => {
    return (
      <div>
        <div>
          {users.map((user) => (
            <Items
              key={user.correo}
              user={user}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          ))}
          <h3>____________________________________</h3>
          <h3 className="text-danger mx-5">TOTAL USUARIOS: ( {users.length} )</h3>
        </div>
        <div></div>
      </div>
    );
}

export default List;