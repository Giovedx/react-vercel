import React from "react";


const Items = ({user,deleteUser,editUser}) => {
    const truncatedName = user.nombre.length > 10 ? user.nombre.slice(0,10) + '...' : user.nombre

    return (
        <div >
            <p><span className="fw-bold">Nombre: </span>{truncatedName}</p>
            <p><span className="fw-bold">Correo: </span> {user.correo}</p>
            <p><span className="fw-bold">Edad: </span>{user.edad}</p>
            <button className="btn btn-warning mx-5 me-2" onClick={() => editUser(user)}>Editar</button>
            <button className="btn btn-danger" onClick={() => deleteUser(user.correo)}>Eliminar</button>
            <p>____________________________________________________________</p>
            <br />
           
            
        </div>
    )
}

export default Items