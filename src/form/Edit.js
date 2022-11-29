import React, {useEffect, useState} from "react";

const EditForm = props => {
    const [user, setUser] = useState (props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },[props]
    )
    const handleInputChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }
    return (
        <form
        onSubmit={event => {
            event.preventDefault()

            props.updateUser(user.id, user)
        } }
        >
            <label>Name</label>
            <input autoComplete="off" type='text' name="name" value={user.name} onChange={handleInputChange}  />
            <label>Username</label>
            <input autoComplete="off" type='text' name="username" value={user.username} onChange={handleInputChange}  />
            <button>Submit</button>
            <button onClick={()=>props.setEditing(false)} className='button muted-button'
            >Cancel</button>
        </form>
    )
}
export default EditForm