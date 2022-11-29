import React, {useState} from "react";

const AddUser = props =>{
const  usualFormState = {id:null, name: '', username: ''}
const [user, setUser] = useState(usualFormState)

const handleInput = event => {
    const {name, value} = event.target

    setUser({...user, [name]: value })
}
return (
    <form
    onSubmit={event =>{ event.preventDefault()
    if(!user.name || !user.username ) return
    props.addUser(user)
    setUser(usualFormState)
    }}
    > 

    <label>Name</label>
    <input autoComplete="off" type='text' name="name"  value={user.name} onChange={handleInput} />
    <label>Username</label>
    <input autoComplete="off" type='text' name="username" value={user.username} onChange={handleInput} />
    <button>Add New User</button>
    </form>
)

} 

export default AddUser