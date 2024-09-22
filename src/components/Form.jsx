import React, {useState , useEffect } from 'react'


const Form = ({addUser, updateUser, currentUser }) =>
{
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')
    useEffect(() => {
        if(currentUser){
            setNombre(currentUser.nombre)
            setCorreo(currentUser.correo)
            setEdad(currentUser.edad)
        }else {
            setNombre('')
            setCorreo('')
            setEdad('')
        }
    },[currentUser])

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(currentUser){
            updateUser({ ...currentUser, nombre,correo,edad})
        }else{
            addUser({ nombre, correo, edad})
        }

        setNombre('')
        setCorreo('')
        setEdad('')
    }

    return (
    
    <div className='container'>

    
        <form onSubmit={handlerSubmit}>
            <input type="text" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <br/>
            <br/>
            <input type="email" placeholder='Correo' value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <br/>
            <br/>
            <input type="number" placeholder=' Edad' value={edad} onChange={(e) => setEdad(e.target.value)} required />
            <br/>
            <br/>
            <button className="btn btn-primary" type='sumit'>{currentUser ? "Actualizar" : "Agregar"}</button>
            <br/>
            <br/>
        </form>

        

    </div>
    )

}

export default Form;